import {Component} from "solid-js";

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
            {/* TODO repository 영역 component 생성 후 for 문으로 처리 필요*/}
            <ul>
              <li>
                <div class="flex">
                  <a href="">icon</a>
                  <div>ngja/ps</div>
                </div>
              </li>
              <li>
                <div class="flex">
                  <a href="">icon</a>
                  <div>ngja/imitation</div>
                </div>
              </li>
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