import {Component} from "solid-js";
import {Icon} from "@iconify-icon/solid";
import GithubIconA from "../common/GithubIconA";
import GithubSearchButton from "../common/GithubSearchButton";

const GithubHeader: Component = () => {
  return (
    <header class="bg-github-light-default-header shadow-[inset_0_-1px_#d0d7de]">
      <div class="flex justify-between items-center">

        {/* left */}
        <div class="flex">
          {/* hamburger icon */}
          <div class="text-rose-900">
            <Icon icon="quill:hamburger" />
          </div>
          {/* Github Logo & Dashboard */}
          <div class="flex">
            <Icon icon="mdi:github"/>
            <div>Dashboard</div>
          </div>
        </div>

        {/* right */}
        <div>
          {/* search bar & other logo icon*/}
          <div class="flex m-2 p-2">
            <div class="mx-2">
              <GithubSearchButton />
            </div>
            <div class="mx-2">
              |
            </div>
            <div>
              create new
            </div>
            <div class="mx-2">
              <GithubIconA link="/github/issue" icon="octicon:issue-opened-24"/>
            </div>
            <div class="mx-2">
              <GithubIconA link="/github/pull-request" icon="octicon:git-pull-request-24" />
            </div>
            <div class="mx-2">
              <GithubIconA link="/github/notifications" icon="octicon:inbox-24"/>
            </div>
            <div>
              profile
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default GithubHeader;