"use client";

import { useMemo, useState } from "react";

type AddonKey = "photo" | "video" | "gopro";
type PackageType = "perPerson" | "couple" | "group";

type BookingFormState = {
  customerName: string;
  phone: string;
  email: string;
  activityName: string;
  travelDate: string;
  persons: number;
  message: string;
  packageType: PackageType;
  basePrice: number;
  addons: AddonKey[];
};

const activityPricing = {
  "River Rafting": {
    packages: {
      perPerson: 500,
      couple: 900,
      group: 2000,
    },
    addons: {
      photo: 300,
      video: 500,
    },
  },
  Paragliding: {
    packages: {
      perPerson: 1500,
      couple: 2800,
      group: 6800,
    },
    addons: {
      photo: 400,
      video: 700,
      gopro: 1000,
    },
  },
} as const;

const addonLabels: Record<AddonKey, string> = {
  photo: "Photo",
  video: "Video Recording",
  gopro: "GoPro Video Recording",
};

const packageLabels: Record<PackageType, string> = {
  perPerson: "Per Person",
  couple: "Couple",
  group: "Group",
};

const initialState: BookingFormState = {
  customerName: "",
  phone: "",
  email: "",
  activityName: "",
  travelDate: "",
  persons: 1,
  message: "",
  packageType: "perPerson",
  basePrice: 0,
  addons: [],
};

const BookingForm = () => {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const selectedActivityData = useMemo(() => {
    if (!form.activityName) return null;
    return (
      activityPricing[form.activityName as keyof typeof activityPricing] || null
    );
  }, [form.activityName]);

  const availablePackages = selectedActivityData?.packages || null;
  const availableAddons = selectedActivityData?.addons || null;

  const addonTotal = useMemo(() => {
    if (!availableAddons) return 0;

    return form.addons.reduce((total, addon) => {
      const addonPrice = availableAddons[addon as keyof typeof availableAddons];
      return total + (addonPrice || 0);
    }, 0);
  }, [form.addons, availableAddons]);

  const grandTotal = form.basePrice + addonTotal;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "activityName") {
      const selectedActivity =
        activityPricing[value as keyof typeof activityPricing];

      setForm((prev) => ({
        ...prev,
        activityName: value,
        packageType: "perPerson",
        basePrice: selectedActivity?.packages.perPerson || 0,
        addons: [],
      }));
      return;
    }

    if (name === "packageType") {
      const packageType = value as PackageType;
      const selectedActivity =
        activityPricing[form.activityName as keyof typeof activityPricing];

      setForm((prev) => ({
        ...prev,
        packageType,
        basePrice: selectedActivity?.packages[packageType] || 0,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "persons" ? Number(value) : value,
    }));
  };

  const handleAddonChange = (addon: AddonKey) => {
    setForm((prev) => {
      const alreadySelected = prev.addons.includes(addon);

      return {
        ...prev,
        addons: alreadySelected
          ? prev.addons.filter((item) => item !== addon)
          : [...prev.addons, addon],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const payload = {
        ...form,
        packageLabel: packageLabels[form.packageType],
        addonDetails: form.addons.map((addon) => ({
          name: addonLabels[addon],
          price: availableAddons?.[addon as keyof typeof availableAddons] || 0,
        })),
        addonTotal,
        grandTotal,
      };

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setResponseMessage(data.message || "Booking failed");
        setLoading(false);
        return;
      }

      setResponseMessage("Booking submitted successfully");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setResponseMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-[28px] p-2 md:p-4"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          Quick Booking Enquiry
        </h3>
        <p className="text-gray-400">
          Select activity, choose package, and add media options.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
        />

        <select
          name="activityName"
          value={form.activityName}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-gray-300 outline-none"
        >
          <option value="" className="bg-[#101915] text-gray-300">
            Choose Activity
          </option>
          <option value="River Rafting" className="bg-[#101915] text-white">
            River Rafting
          </option>
          <option value="Paragliding" className="bg-[#101915] text-white">
            Paragliding
          </option>
        </select>

        <input
          type="date"
          name="travelDate"
          value={form.travelDate}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-gray-300 outline-none"
        />

        <input
          type="number"
          name="persons"
          value={form.persons}
          onChange={handleChange}
          min={1}
          placeholder="Number of Persons"
          className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
        />
      </div>

      {availablePackages && (
        <div className="rounded-[28px] border border-white/10 p-5">
          <div className="mb-5">
            <h4 className="text-xl font-semibold text-white">Choose Package</h4>
            <p className="mt-1 text-sm text-gray-400">
              Base price will update automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {Object.entries(availablePackages).map(([key, value]) => (
              <label
                key={key}
                className={`cursor-pointer rounded-2xl border px-4 py-4 transition ${
                  form.packageType === key
                    ? "border-amber-500/40 bg-amber-500/10"
                    : "border-white/10 bg-transparent hover:border-amber-500/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="packageType"
                      value={key}
                      checked={form.packageType === key}
                      onChange={handleChange}
                      className="h-4 w-4 accent-amber-500"
                    />
                    <span className="text-white">
                      {packageLabels[key as PackageType]}
                    </span>
                  </div>
                  <span className="font-semibold text-amber-400">₹{value}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {availableAddons && (
        <div className="rounded-[28px] border border-white/10 p-5">
          <div className="mb-5">
            <h4 className="text-xl font-semibold text-white">
              Add Photo & Video Options
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Selected add-ons will be added to total price.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {"photo" in availableAddons && (
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 px-4 py-4 transition hover:border-amber-500/40">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.addons.includes("photo")}
                    onChange={() => handleAddonChange("photo")}
                    className="h-4 w-4 accent-amber-500"
                  />
                  <span className="text-white">Photo</span>
                </div>
                <span className="font-medium text-amber-400">
                  ₹{availableAddons.photo}
                </span>
              </label>
            )}

            {"video" in availableAddons && (
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 px-4 py-4 transition hover:border-amber-500/40">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.addons.includes("video")}
                    onChange={() => handleAddonChange("video")}
                    className="h-4 w-4 accent-amber-500"
                  />
                  <span className="text-white">Video Recording</span>
                </div>
                <span className="font-medium text-amber-400">
                  ₹{availableAddons.video}
                </span>
              </label>
            )}

            {"gopro" in availableAddons && (
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-amber-500/30 bg-amber-500/5 px-4 py-4 transition hover:border-amber-500/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={form.addons.includes("gopro")}
                    onChange={() => handleAddonChange("gopro")}
                    className="h-4 w-4 accent-amber-500"
                  />
                  <div>
                    <span className="block text-white">GoPro Video</span>
                    <span className="text-xs text-gray-400">
                      Only for paragliding
                    </span>
                  </div>
                </div>
                <span className="font-medium text-amber-400">
                  ₹{availableAddons.gopro}
                </span>
              </label>
            )}
          </div>
        </div>
      )}

      {(form.activityName || form.addons.length > 0) && (
        <div className="rounded-[28px] border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-transparent p-5">
          <h4 className="mb-4 text-xl font-semibold text-white">
            Price Summary
          </h4>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between text-gray-300">
              <span>Base Price</span>
              <span>₹{form.basePrice}</span>
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <span>Add-ons Total</span>
              <span>₹{addonTotal}</span>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-base font-semibold text-white">
              <span>Total Price</span>
              <span className="text-amber-400">₹{grandTotal}</span>
            </div>
          </div>
        </div>
      )}

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        placeholder="Write your message..."
        className="w-full resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-400">
          After submitting, your booking request will be sent for confirmation.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-600 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Send Booking Request"}
        </button>
      </div>

      {responseMessage ? (
        <p className="text-sm text-gray-300">{responseMessage}</p>
      ) : null}
    </form>
  );
};

export default BookingForm;
