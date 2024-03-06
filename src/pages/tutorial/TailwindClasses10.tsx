import {Component} from "solid-js";

const TailwindClasses10: Component = () => {
  return (
    <div>
      {/* 1. tailwind.config.js theme.container 속성으로 center: true, padding: 2rem 으로 정렬 가능*/}
      <div
        class="container bg-orange-500 divide-y-8 divide-red-500"> {/* 3. divide-y로 하위 컴포넌트에 border-b 붙여주는걸 간단하게 표현 가능 색도 지정 가능 */}
        {/* 2. size-48 == w-48 h-48 과 같다*/}
        <div class="bg-blue-500 size-48"></div>
        <div class="bg-blue-500 size-48"></div>
        <div class="bg-blue-500 size-48"></div>
      </div>

      {/* 4. flex나 grid가 아니여서 gap을 못쓸때 space로 간격 벌리기 가능*/}
      <div class="space-y-8">
        <div class="bg-amber-200 size-24"></div>
        <div class="bg-amber-200 size-24"></div>
        <div class="bg-amber-200 size-24"></div>
      </div>

      {/* 5. line-clamp 로 넘치는 텍스트 ... 표현 가능*/}
      <div class="line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis doloremque, dolorum enim error
        eveniet expedita fuga labore minima nihil omnis placeat recusandae rem repellendus repudiandae totam
        voluptatibus.
        Adipisci impedit placeat quia. Accusantium consequatur dolorem earum enim ipsa ipsum molestiae omnis,
        perferendis sapiente,
        ut vel voluptates? Consectetur consequatur ducimus hic natus temporibus? Accusantium, aut, dignissimos dolor
        eius
        ex harum id maiores molestias, mollitia neque non perspiciatis possimus quasi quibusdam ratione repellat rerum
        sint
        ullam velit voluptatum. A accusantium, alias assumenda at beatae, delectus doloremque illum itaque laboriosam
        laborum
        laudantium maiores nesciunt non porro quia quis ratione repellendus sunt totam vel.
      </div>

      {/* 6. truncate 로 1줄 ... 도 가능 */}
      <div class="truncate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae blanditiis itaque laudantium porro, quam
        quod vel voluptate. Adipisci, architecto beatae consectetur culpa cumque dolor dolorum ducimus eos ex fuga
        laudantium nesciunt numquam odio omnis perferendis praesentium provident quibusdam rem repellat reprehenderit
        saepe soluta ut. Exercitationem fugiat hic sit totam.
      </div>

      {/* 7. gradient, from, to, via 를 활용해 gradient 효과 쉽게 적용 가능 */}
      <div>
        <div class="h-48 w-full bg-gradient-to-r from-orange-500 to-black via-white from-20% via-70% to-90%"></div>
      </div>

      {/* 8. ring 으로 outline 설정 가능 */}
      <button class="h-12 w-24 m-5 bg-blue-500 text-white ring-4 ring-red-900">
        Text
      </button>

      {/* 9. built-in animation 효과들 */}
      <div>
        <div class="size-10 bg-primary-300 animate-ping"></div>
        <div class="size-10 bg-primary-300 animate-spin"></div>
        <div class="size-10 bg-primary-300 animate-pulse"></div>
        <div class="size-10 bg-primary-300 animate-bounce"></div>
      </div>

      {/* 10. screen read only */}
      <div class="sr-only">
        Hello
      </div>
    </div>
  )
}

export default TailwindClasses10;