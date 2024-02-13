import {Component} from "solid-js";
import {Icon} from "@iconify-icon/solid";

const GithubSearchButton: Component = () => {
  return (
    <div class="w-[350px]">
      <div class="flex border-solid border-github-light-default-border border-2 rounded-md text-github-light-default-icon p-1">
        <div class="w-full flex items-center">
          <label>
            <Icon icon="octicon:search-24" class="text-xl align-middle"/>
          </label>
          <button class="pl-1">
            <span>
              Type
              <kbd>/</kbd>
              to search
            </span>
          </button>
        </div>
        <button>
          <Icon icon="octicon:command-palette-24" class="text-xl align-middle"/>
        </button>
      </div>
    </div>
  )
}

export default GithubSearchButton;