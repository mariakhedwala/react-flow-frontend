// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';
import { submitPipeline } from "./api";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  responseData: null,
  error: null,
  isSubmitting: false,

  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node]
    });
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge({ ...connection, type: 'smoothstep', animated: true, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px' } }, get().edges),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
  onSubmitPipeline: async (nodes, edges) => {
    set({ isSubmitting: true, error: null }); // Set loading state
    try {
      const data = await submitPipeline(nodes, edges); // Call API
      set({ responseData: data, isSubmitting: false }); // Update response data
    } catch (err) {
      set({ error: "Failed to submit pipeline. Please try again.", isSubmitting: false }); // Handle error
    }
  },

  resetResponse: () => {
    set({ responseData: null, error: null });
  },
}));
