import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InvestorCard() {
  const navigate = useNavigate();

  const [growth, setGrowth] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
  let g = 0;
  let v = 0;

  const interval = setInterval(() => {
    // slower growth steps
    if (g < 30) {
      g += 1;
      setGrowth(g);
    }

    if (v < 6.8) {
      v += 0.05; // smaller step = slower + smoother
      setValue(parseFloat(v.toFixed(2)));
    }

    if (g >= 30 && v >= 6.8) {
      clearInterval(interval);
    }
  }, 100); // 👈 slower interval (IMPORTANT)

  return () => clearInterval(interval);
}, []);

  return (
    <div className="col-span-3 bg-white shadow-lg p-10 flex flex-col justify-center border-l-4 border-red-600">

      <h2 className="text-2xl font-bold text-gray-800">
        Investor Relations
      </h2>

      <p className="mt-4 text-gray-600 text-sm">
        Stay updated with financial performance, shareholder information, and corporate governance updates.
      </p>

      {/* STATS */}
      <div className="mt-8 space-y-6">

        <div>
          <h3 className="text-4xl font-bold text-red-600">
            {growth}%
          </h3>
          <p className="text-sm text-gray-600">
            Growth in revenue
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-red-600">
            $ {value}B
          </h3>
          <p className="text-sm text-gray-600">
            Company Value
          </p>
        </div>

      </div>

      <button
        onClick={() => navigate("/investors")}
        className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
      >
        Learn More →
      </button>

    </div>
  );
}