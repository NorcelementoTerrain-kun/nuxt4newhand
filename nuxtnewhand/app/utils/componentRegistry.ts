import { 
  NodeType, 
  type ComponentRegistryItem, 
  type NodeData,
  type TemplateNodeData,
  type BasicInfoNodeData,
  type ContentNodeData,
  type BackgroundImageNodeData,
  type CustomImageNodeData
} from '@/types/mindmap';

// 导入组件 - 使用动态导入或直接导入
import TemplateNode from '@/components/node-components/TemplateNode.vue';
import BasicInfoNode from '@/components/node-components/BasicInfoNode.vue';
import ContentBoxNode from '@/components/node-components/ContentBoxNode.vue';
import BackgroundImageNode from '@/components/node-components/BackgroundImageNode.vue';
import CustomImageNode from '@/components/node-components/CustomImageNode.vue';

// 生成唯一ID
export const generateId = (): string => {
  return `node_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// 默认数据生成器
const createDefaultData = {
  [NodeType.TEMPLATE]: (id: string, topic: string): TemplateNodeData => ({
    id,
    type: NodeType.TEMPLATE,
    topic,
    name: topic,
    description: '这是一个模板节点',
    fields: [],
    createdAt: new Date().toISOString(),
    style: {
      backgroundColor: '#f0f9ff',
      color: '#0369a1'
    }
  }),

  [NodeType.BASIC_INFO]: (id: string, topic: string): BasicInfoNodeData => ({
    id,
    type: NodeType.BASIC_INFO,
    topic,
    title: topic,
    content: '',
    author: '系统',
    tags: [],
    priority: 'medium',
    createdDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString()
  }),

  [NodeType.CONTENT]: (id: string, topic: string): ContentNodeData => ({
    id,
    type: NodeType.CONTENT,
    topic,
    content: '请输入内容...',
    style: {
      fontSize: '14px',
      color: '#333',
      backgroundColor: '#fff',
      padding: '12px',
      borderRadius: '4px'
    },
    createdAt: new Date().toISOString()
  }),

  [NodeType.BACKGROUND_IMAGE]: (id: string, topic: string): BackgroundImageNodeData => ({
    id,
    type: NodeType.BACKGROUND_IMAGE,
    topic,
    url: '',
    opacity: 0.8,
    repeat: 'no-repeat',
    size: 'cover',
    position: 'center',
    createdAt: new Date().toISOString()
  }),

  [NodeType.CUSTOM_IMAGE]: (id: string, topic: string): CustomImageNodeData => ({
    id,
    type: NodeType.CUSTOM_IMAGE,
    topic,
    url: '',
    alt: '自定义图片',
    width: 200,
    height: 150,
    createdAt: new Date().toISOString()
  })
};

// 组件注册表
export const componentRegistry: ComponentRegistryItem[] = [
  {
    type: NodeType.TEMPLATE,
    component: TemplateNode,
    defaultData: createDefaultData[NodeType.TEMPLATE],
    icon: '📝',
    label: '模板'
  },
  {
    type: NodeType.BASIC_INFO,
    component: BasicInfoNode,
    defaultData: createDefaultData[NodeType.BASIC_INFO],
    icon: '📄',
    label: '基本信息'
  },
  {
    type: NodeType.CONTENT,
    component: ContentBoxNode,
    defaultData: createDefaultData[NodeType.CONTENT],
    icon: '📋',
    label: '内容框'
  },
  {
    type: NodeType.BACKGROUND_IMAGE,
    component: BackgroundImageNode,
    defaultData: createDefaultData[NodeType.BACKGROUND_IMAGE],
    icon: '🖼️',
    label: '背景图片'
  },
  {
    type: NodeType.CUSTOM_IMAGE,
    component: CustomImageNode,
    defaultData: createDefaultData[NodeType.CUSTOM_IMAGE],
    icon: '🏞️',
    label: '自定义图片'
  }
];

// 获取组件注册项
export const getComponentRegistry = (type: NodeType): ComponentRegistryItem => {
  const item = componentRegistry.find(item => item.type === type);
  if (!item) {
    throw new Error(`未找到类型为 ${type} 的组件注册项`);
  }
  return item;
};

// 获取所有可用的节点类型
export const getAvailableNodeTypes = (): ComponentRegistryItem[] => {
  return componentRegistry;
};

// 添加新的组件注册项
export const registerComponent = (item: ComponentRegistryItem): void => {
  const index = componentRegistry.findIndex(i => i.type === item.type);
  if (index > -1) {
    componentRegistry[index] = item;
  } else {
    componentRegistry.push(item);
  }
};