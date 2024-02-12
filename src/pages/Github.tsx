import {Component} from "solid-js";
import GithubHeader from "../components/github/GithubHeader";
import GithubLeftSidebar from "../components/github/GithubLeftSidebar";
import GithubFeed from "../components/github/GithubFeed";
import GithubRightSidebar from "../components/github/GithubRightSidebar";

const Github: Component = () => {
  return (
    <div>
      <GithubHeader/>
      <main class="flex h-screen">
        <aside class="w-[320px] border-r-2">
          <GithubLeftSidebar />
        </aside>

        <div class="flex">
          <div>
            <GithubFeed />
          </div>
          <aside>
            <GithubRightSidebar />
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Github;