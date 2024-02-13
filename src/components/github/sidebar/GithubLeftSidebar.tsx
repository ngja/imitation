import {Component, For} from "solid-js";
import {repo} from "../../../db/repo"
import GithubSidebarRepository from "./GithubSidebarRepository";

const GithubLeftSidebar: Component = () => {




  return (
    <div class="mx-6 mt-3">
      <div>
        <div>
          <h2>
            Top Repositories
            <button>New</button>
          </h2>
          <div>
            <input class="border-2" placeholder="Find a repository..."/>
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
        <div>
          <h2>Recent activity</h2>
          <div>
            <p>
              When you take actions across GitHub, we'll provide links to that activity here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubLeftSidebar;