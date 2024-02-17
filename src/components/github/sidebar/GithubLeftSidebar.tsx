import {Component, For} from "solid-js";
import {repo} from "../../../db/repo"
import GithubSidebarRepository from "./GithubSidebarRepository";
import {Icon} from "@iconify-icon/solid";

const GithubLeftSidebar: Component = () => {
  return (
    <div class="mx-6 mt-3">
      <div class="px-2 pt-6">
        <div>
          <h2 class="flex justify-between">
            <span class="font-bold text-gray-500">
              Top Repositories
            </span>
            <button class="h-7 px-2 border border-gray-500 bg-green-700 rounded-md text-white">
              <span class="mr-1"><Icon icon="grommet-icons:book" /></span>
              <span>New</span>
            </button>
          </h2>
          <div class="mt-2 mb-4">
            <input class="border-2 w-full py-0.5 px-2 rounded-md bg-github-light-default-header" placeholder="Find a repository..."/>
          </div>
          <div>
            <ul>
              <For each={repo}>
                {(r, i) =>
                <li>
                  <GithubSidebarRepository link={r.link} name={r.name} />
                </li>
                }
              </For>
            </ul>
          </div>
        </div>
        <div class="mt-6">
          <h2 class="font-bold text-gray-500">Recent activity</h2>
          <div class="mt-3 p-3 border border-dashed rounded-md">
            <p class="text-gray-400 text-xs">
              When you take actions across GitHub, we'll provide links to that activity here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubLeftSidebar;