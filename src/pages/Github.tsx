import {Component} from "solid-js";
import GithubHeader from "../components/github/header/GithubHeader";
import GithubLeftSidebar from "../components/github/sidebar/GithubLeftSidebar";
import GithubFeed from "../components/github/feed/GithubFeed";
import GithubRightSidebar from "../components/github/sidebar/GithubRightSidebar";

const Github: Component = () => {
  return (
    <div>
      <GithubHeader/>
      <main class="flex h-screen">
        <aside class="w-[320px] min-w-[320px] border-r-2">
          <GithubLeftSidebar />
        </aside>

        <div class="w-4/6 m-4">
          <div class="flex justify-center w-full gap-6">
            <div class="max-w-[900px] w-full border-4">
              <GithubFeed/>
            </div>
            <div class="max-w-[356px] border-4">
              <GithubRightSidebar/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Github;