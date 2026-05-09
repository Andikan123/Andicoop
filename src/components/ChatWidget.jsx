import React, { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-10 right-6 w-18 h-18 rounded-full bg-red-600 text-white text-2xl shadow-xl hover:bg-red-700 transition z-50 flex items-center justify-center"
      >
        💬
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[320px] h-[420px] bg-white shadow-2xl rounded-xl overflow-hidden z-50 flex flex-col">

          {/* HEADER */}
          <div className="bg-[#0B1F3A] text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Andikan Group Assistant</h3>

            <button
              onClick={() => setOpen(false)}
              className="text-xl"
            >
              ✕
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 p-3 text-sm text-gray-600 overflow-y-auto">
            <p>👋 Hello! Welcome to Andikan Cooperation.</p>
            <p className="mt-2">How can we help you today?</p>
          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border px-3 py-2 text-sm rounded outline-none"
            />
            <button className="bg-red-600 text-white px-3 rounded">
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}