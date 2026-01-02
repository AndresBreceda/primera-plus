import { useState } from "react";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { Header } from "../Header";
import { Footer } from "../Footer";


export default function Bluetooth() {
  const [connecting, setConnecting] = useState(false);

  const handleConnect = () => {
    if (connecting) return;
    setConnecting(true);

    // simulación de conexión
    setTimeout(() => {
      setConnecting(false);
    }, 3000);
  };

  return (
        <div className="min-h-screen flex flex-col">
          <Header showBack />
    
          <main className="flex-1 flex justify-center pt-10 px-4">
            <div className="w-full max-w-md border-2 border-black rounded-2xl overflow-hidden bg-white">
      
              {/* Header Bluetooth */}
              <div className="flex items-center gap-3 p-4 border-b-2 border-black">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600">
                  <BluetoothIcon className="text-white text-3xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">Bluetooth</p>
                  <p className="text-sm text-gray-600">
                    conecta tus aparatos a través de nuestra red bluetooth
                  </p>
                </div>
              </div>

              {/* Dispositivo */}
              <div
                onClick={handleConnect}
                className="relative flex items-center gap-3 p-4 cursor-pointer group"
              >
                {/* Icono */}
                <HeadphonesIcon className="text-4xl z-10" />

                {/* Texto */}
                <div className="z-10">
                  <p className="font-bold">Bose Quiet Comfort</p>
                  <p className="text-sm text-gray-600">
                    3E:FF:56:A1:2B:20
                  </p>
                </div>

                {/* Overlay Hover / Loading */}
                <div className="
                  absolute inset-0 
                  bg-black/70 
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                ">
                  {!connecting ? (
                    <span className="text-white font-semibold text-lg">
                      Conectar
                    </span>
                  ) : (
                    <span className="text-white text-2xl flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce delay-150">.</span>
                      <span className="animate-bounce delay-300">.</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </main>
    
          <Footer />
        </div>
    
  );
}
