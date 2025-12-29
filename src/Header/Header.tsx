import { useNavigate } from "react-router-dom";
import SettingsBluetoothIcon from '@mui/icons-material/SettingsBluetooth';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Header({ showBack = false }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4">

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
      <div className="flex gap-6">
        <SettingsBluetoothIcon sx={{ fontSize: 32 }} className="cursor-pointer hover:text-gray-600 transition" />
        <Brightness5Icon sx={{ fontSize: 32 }} className="cursor-pointer hover:text-gray-600 transition" />
        <VolumeUpIcon sx={{ fontSize: 32 }} className="cursor-pointer hover:text-gray-600 transition" />
      </div>

    </header>
  );
}
