import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SettingsBluetoothIcon from "@mui/icons-material/SettingsBluetooth";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import VolumeDownAltIcon from "@mui/icons-material/VolumeDownAlt";
import { useIsMobile } from "../Hooks/Hooks";

export default function Header({ showBack = false }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();


  const [showVolume, setShowVolume] = useState(false);
  const [showBrightness, setShowBrightness] = useState(false);

  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(70);

  // Auto ocultar volumen
  useEffect(() => {
    if (!showVolume) return;
    const timer = setTimeout(() => setShowVolume(false), 3000);
    return () => clearTimeout(timer);
  }, [showVolume, volume]);

  // Auto ocultar brillo
  useEffect(() => {
    if (!showBrightness) return;
    const timer = setTimeout(() => setShowBrightness(false), 3000);
    return () => clearTimeout(timer);
  }, [showBrightness, brightness]);

  return (
    <header className={`relative flex items-center justify-between px-6 py-4 ${isMobile ? "mb-10" : ""}`}>

      {/* Flecha izquierda */}
      <div className="w-10">
        {showBack && (
          <ArrowBackIosNewIcon
            sx={{ fontSize: 32 }}
            onClick={() => navigate("/Home")}
            className="cursor-pointer hover:text-gray-600 transition"
          />
        )}
      </div>

      {/* Íconos derecha */}
      <div className="flex gap-6 items-center">
        <SettingsBluetoothIcon
          sx={{ fontSize: 32 }}
          className="cursor-pointer hover:text-gray-600 transition"
        />

        {/* Botón Brillo */}
        <Brightness5Icon
          sx={{ fontSize: 32 }}
          onClick={() => {
            setShowBrightness(true);
            setShowVolume(false);
          }}
          className="cursor-pointer hover:text-gray-600 transition"
        />

        {/* Botón Volumen */}
        <VolumeUpIcon
          sx={{ fontSize: 32 }}
          onClick={() => {
            setShowVolume(true);
            setShowBrightness(false);
          }}
          className="cursor-pointer hover:text-gray-600 transition"
        />
      </div>

      {/* ================= BRILLO ================= */}
      <div
        className={`absolute left-1/2 mt-1 -translate-x-1/2
          bg-transparent rounded-xl px-4 py-3 text-3xl
          transition-all duration-300 flex gap-2 items-center
          ${showBrightness
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }
          ${isMobile
            ? "mt-20"
            : ""
          }
          `}
      >
        <BrightnessLowIcon />
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBrightness(Number(e.target.value))
          }
          className="w-40"
        />
        <BrightnessHighIcon />
      </div>

      {/* ================= VOLUMEN ================= */}
      <div
        className={`absolute left-1/2 mt-1 -translate-x-1/2
          bg-transparent rounded-xl px-4 py-3 text-3xl
          transition-all duration-300 flex gap-2 items-center
          ${showVolume
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
          }
          ${isMobile
            ? "mt-20"
            : ""
          }`}
      >
        <VolumeDownAltIcon />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBrightness(Number(e.target.value))
          }
          className="w-40"
        />
        <VolumeUpIcon />
      </div>
    </header>
  );
}
