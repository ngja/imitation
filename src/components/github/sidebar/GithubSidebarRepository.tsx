import {Component} from "solid-js";

const GithubSidebarRepository: Component<{link: string, name: string}> = (props) => {
  return (
    <div class="flex">
      <a href={props.link}>
        <img src="https://avatars.githubusercontent.com/u/98628227?s=16&v=4" alt="avatar"/>
      </a>
      <div>
        {props.name}
      </div>
    </div>
  )
}

export default GithubSidebarRepository;