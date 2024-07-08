import "./App.css";
import "leaflet/dist/leaflet.css";

import { Sidebar } from "@/components/sidebar";
import { CustomTabs } from "@/components/tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CustomMap } from "@/components/map";
import { AuthProvider } from "@/providers/authProvider";
import MapProvider from "@/providers/mapProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MapProvider>
          <main className="flex">
            <Sidebar />
            <div className="w-[420px]">
              <CustomTabs />
            </div>
            <div className="flex mt-[39px] w-full h-[calc(100vh-40px)] bg-white p-[5px]">
              <CustomMap />
            </div>
          </main>
        </MapProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
