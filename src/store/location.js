import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    /**
     * Define a nova localização ativa
     * @param {Object|null} location - Objeto de localização ou null
     */
    setActiveLocation: (location) =>
      set((state) => {
        // Se location for undefined (ex: chamada sem args), decide se mantém null ou ignora.
        // Aqui mantemos a lógica original de aceitar o valor passado.
        state.activeLocation = location !== undefined ? location : null;
      }),
      
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
