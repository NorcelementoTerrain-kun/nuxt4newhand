// types/components.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 针对 VueMindMap 组件补充类型
declare module '@/components/VueMindMap.vue' {
  import { DefineComponent } from 'vue';
  
  interface NodeCreatedEvent {
    id: string;
    topic: string;
  }
  
  interface NodeDeletedEvent {
    id: string;
  }
  
  const component: DefineComponent<{
    // 声明 props（如果组件有 props）
  }, {
    // 声明暴露的方法（如果组件有 ref 调用）
    addNode: (topic: string, parentId?: string) => void;
    exportData: () => any;
  }, {
    // 声明 emits
    'node-created': (event: NodeCreatedEvent) => void;
    'node-deleted': (event: NodeDeletedEvent) => void;
  }>;
  
  export default component;
}