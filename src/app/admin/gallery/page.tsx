"use client";

import { useEffect, useState } from "react";

type GalleryImage = {
  id: string;
  imageUrl: string;
  caption?: string;
};

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [form, setForm] = useState({
    imageUrl: "",
    caption: "",
  });

  const fetchImages = async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setImages(data.images || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ imageUrl: "", caption: "" });
    fetchImages();
  };

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data.images || []);
    };
    load();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Gallery</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <div className="mb-4">
          <label className="mb-2 block text-sm">Image URL</label>
          <input
            type="url"
            value={form.imageUrl}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm">Caption</label>
          <input
            type="text"
            value={form.caption}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, caption: e.target.value }))
            }
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black"
        >
          Add Image
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img
              src={image.imageUrl}
              alt={image.caption || "gallery"}
              className="h-60 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-200">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
