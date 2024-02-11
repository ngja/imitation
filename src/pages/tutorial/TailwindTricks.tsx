// https://www.youtube.com/watch?v=aSlK3GhRuXA
import {Component} from "solid-js";

const TailwindTricks: Component = () => {
  return (
    <div>
      <div class="flex flex-col justify-center m-10 bg-gray-200">

        <div class="flex m-10">
          {/* 1. peer and group */}
          {/* Group: parent에 group을 넣고 child에 group-hover를 사용해 개별로 hover 적용 가능  */}
          <div class="peer group grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400">
            <div class="h-5 w-5 bg-black group-hover:bg-yellow-600"></div>
            <div class="h-5 w-5 bg-black group-hover:bg-pink-600"></div>
          </div>
          {/* Peer: sibling 사이에 상태를 받으려면 peer로 사용 가능 */}
          <div class="h-20 w-20 bg-green-400 peer-hover:bg-orange-500"></div>
          {/* /이름 으로 영향 대상 구분 가능 */}
          <div class="h-20 w-20 bg-amber-400 peer-hover/name:bg-emerald-900"></div>
        </div>


        <div class="flex m-10">
          {/* 2. animations */}
          {/* transition-[], duraiton-[], ease-[], delay-[] 키워드를 사용하여 기본 애니메이션 구현 가능 */}
          <div class="h-20 w-20 bg-blue-400 hover:bg-yellow-400 transition-colors duration-300 ease-in-out delay-500"></div>
          <div class="h-20 w-20 bg-purple-400 hover:bg-yellow-400 transition-colors duration-300 ease-out delay-300"></div>

          {/* animate-[] 관련 여러 효과도 있다 */}
          <div class="animate-spin">🤣</div>
          <div class="animate-ping">🎵</div>
          <div class="animate-pulse">😺</div>
          <div class="animate-bounce">Hit the 🔔</div>
        </div>

        <div class="m-10">
          {/* 3. responsive designs*/}
          {/* sm, md, lg, xl, 2xl 키워드로 반응형 디자인 가능 */}
          <div class="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
            <div class="w-full aspect-video bg-purple-400"></div>
            <div class="w-full aspect-video bg-purple-400"></div>
            <div class="w-full aspect-video bg-purple-400"></div>
            <div class="w-full aspect-video bg-purple-400"></div>
            <div class="w-full aspect-video bg-purple-400"></div>
            <div class="w-full aspect-video bg-purple-400"></div>
          </div>
        </div>

        <div class="flex m-10">
          {/* 6. @apply and theme */}
          <div class="external"></div>
          <div class="w-20 h-10 rounded-lg shadow-[0_0_10px_purple]"></div>
        </div>

        <div class="flex m-10">
          {/* 7. extend tailwind */}
          {/* tailwind.config.js 에서 확장 가능 */}
          <div class="w-20 h-10 rounded-lg shadow-neon"></div>
        </div>

        <div class="flex m-10">
          {/* 8. plugins */}
          {/* js 사용해서 스타일 생성 가능 */}
          <div class="w-20 h-10 rounded-lg neon-red"></div>
        </div>

        <div class="flex m-10">
          {/* 9. color object  */}
          {/* DEFAULT 로 숫자 없이 사용했을 때 기본값 설정 가능*/}
          <div class="w-20 h-20 bg-primary"></div>
        </div>
      </div>

    </div>
  )
}

export default TailwindTricks;