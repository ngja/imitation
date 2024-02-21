import {Component} from "solid-js";

const GithubFeed: Component = () => {
  return (
    <div class="flex flex-col justify-center w-full">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold">
          Home
        </h1>
        <div class="flex">
          <a class="underline text-blue-600">
            Send feedback
          </a>
          <div class="ml-4">
            Filter
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default GithubFeed;