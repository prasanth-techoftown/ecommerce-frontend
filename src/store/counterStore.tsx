import { create } from "zustand";

// Define the store shape
interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

// Create the store with typing
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
