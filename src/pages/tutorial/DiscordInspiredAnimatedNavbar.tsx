// https://www.youtube.com/watch?v=pfaSUYaSgRo
import {Component} from "solid-js";
import {Icon} from "@iconify-icon/solid";

const DiscordInspiredAnimatedNavbar: Component = () => {
  return (
    <div class="flex">
      <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon="ic:baseline-discord" text="Discord"/>
        <SideBarIcon icon="ic:baseline-plus" text="add some channel"/>
        <SideBarIcon icon="mdi:thunder" text="thunder"/>
        <SideBarIcon icon="fa6-solid:poo" text="poo"/>
      </div>
    </div>
  )
}

const SideBarIcon: Component<{icon: string, text: string}> = ({icon, text}) => {
  return (
    <div class="sidebar-icon group">
      <Icon icon={icon} />
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
}

export default DiscordInspiredAnimatedNavbar;