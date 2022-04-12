import create from 'zustand';

const useStore = create(set => ({
  blocks: {
    'blue': 0,
    'red': 0,
    'green': 0,
    'black': 0
  },
  addBlock: block => set((state) => ({blocks: [...state.blocks, block]})) 
}));

export default useStore;