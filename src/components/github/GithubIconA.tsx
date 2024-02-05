import {Component, mergeProps} from "solid-js";
import {Icon} from "@iconify-icon/solid";

const GithubIconA: Component<{link: string, icon: string, color?: string, size?: string}> = (props) => {
  const merged = mergeProps({
    link: "/",
    icon: "material-symbols:code",
    color: "text-github-light-default-icon",
    size: "text-xl"
  }, props)

  const styles = `p-1 border-solid border-2 border-github-light-default rounded-lg ${merged.color} ${merged.size}`

  return (
    <div class={styles}>
      <a href={merged.link}>
        <Icon icon={merged.icon} />
      </a>
    </div>
  )
}

export default GithubIconA;