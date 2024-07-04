import 'vue-router'
import { Component, DirectiveFunction, PluginObject } from "vue";

declare module 'vue-router' {
  interface RouteMeta {
    layout: string
    tKey?: string
  }
}
declare namespace VueTheMaskPlugin {
  interface VueStatic {
      (): void;
  }
}

interface VueTheMaskPlugin extends PluginObject<undefined> {
  mask: DirectiveFunction;
  TheMask: Component;
}

declare const VueTheMask: VueTheMaskPlugin;
export = VueTheMask;
