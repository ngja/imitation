import {Component} from "solid-js";

const GithubSidebarRepository: Component<{link: string, name: string}> = (props) => {
  return (
    <div class="flex mt-1.5 leading-normal">
      <a class="flex justify-center items-center mr-1" href={props.link}>
        <img class="rounded-xl" src="https://avatars.githubusercontent.com/u/98628227?s=16&v=4" alt="avatar"/>
      </a>
      <div>
        <a class="hover:underline" href={props.link}>
          <span class="text-sm">{props.name}</span>
        </a>
      </div>
    </div>
  )
}

export default GithubSidebarRepository;