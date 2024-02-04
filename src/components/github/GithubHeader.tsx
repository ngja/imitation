import {Component} from "solid-js";
import {Icon} from "@iconify-icon/solid";

const GithubHeader: Component = () => {
  return (
    <header class="bg-github-light-default-header shadow-[inset_0_-1px_#d0d7de]">
      <div class="flex justify-between">

        {/* left */}
        <div class="flex">
          {/* hamburger icon */}
          <div>
            <Icon icon="quill:hamburger" class="text-gray-400 text-4xl" />
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
          <div class="flex">
            <div>
              search bar
            </div>
            <div>
              |
            </div>
            <div>
              create new...
            </div>
            <div>
              issues
            </div>
            <div>
              pull request
            </div>
            <div>
              noti
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