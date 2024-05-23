import React from 'react'

export default function App() {
  return (
    <div>
      App
      <h1 className='text-red-500 text-[32px]'>Đây là tiêu đề h1</h1>
      <p className='w-[200px] h-[200px] bg-red-500'></p>
      <div className='flex'>
      <p className='w-[200px] h-[200px] bg-blue-500 rounded-full'></p>
      <p className='w-[200px] h-[200px] bg-red-500 rounded-full'></p>
      <p className='w-[200px] h-[200px] bg-green-500 rounded-full'></p>
      </div>
      <button className='w-[100px] bg-blue-300 rounded-full hover:bg-blue-500'>Submit</button>
      <div className="relative w-[200px] h-[200px] bg-blue-500">
  <p>Relative parent</p>
  <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-blue-300">
    <p>Absolute child</p>
  </div>
</div>
    <div className='w-[500px] h-[200px] overflow-auto'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quod alias qui sint consequuntur provident repudiandae dolor reprehenderit non labore saepe, maiores, nisi ad vero omnis doloribus, tempora consectetur ipsa.
      Cupiditate, deleniti aut magni facilis saepe, fugit nobis sed ducimus culpa veritatis, tenetur optio temporibus repellendus? Iusto natus est non dolore error nobis in! Itaque cupiditate veritatis illo repellendus! Fuga!
      Debitis facilis saepe voluptatum dicta dolorem natus corporis, nesciunt culpa velit voluptas molestias inventore adipisci vero quis beatae similique tenetur molestiae voluptatibus, cupiditate delectus necessitatibus? Accusantium sint consequuntur eum pariatur?
      Aspernatur, temporibus quae ipsam quis provident eaque nulla corporis debitis magnam repudiandae eius rerum earum, velit, necessitatibus sed. Fugit necessitatibus deserunt iure accusantium amet quas? Inventore nulla molestias eos asperiores.
      Dicta eos sequi necessitatibus debitis ea quos fugit. Animi perferendis illo hic nam corrupti accusantium earum sunt laborum numquam iste, reiciendis, non libero eaque sit blanditiis placeat voluptatibus nostrum. Ab.
    </div>
     <div className='grid grid-rows-3 grid-flow-col gap-3 w-[500px]'>
      <div className='bg-purple-500 w-[100px]'>1</div>
      <div className='bg-purple-500 w-[100px]'>2</div>
      <div className='bg-purple-500 w-[100px]'>3</div>
      <div className='bg-purple-500 w-[100px]'>4</div>
      <div className='bg-purple-500 w-[100px]'>5</div>
      <div className='bg-purple-500 w-[100px]'>6</div>
      <div className='bg-purple-500 w-[100px]'>7</div>
      <div className='bg-purple-500 w-[100px]'>8</div>
      <div className='bg-purple-500 w-[100px]'>9</div>
     </div>
     <div className='flex flex-initial justify-start w-[500px]'>
      <div className='w-[100px] bg-blue-400'>1</div>
      <div className='w-[100px] bg-blue-400'>2</div>
      <div className='w-[100px] bg-blue-400'>3</div>
     </div>
     <br />
     <div className='flex flex-initial justify-end w-[500px]'>
      <div className='w-[100px] bg-blue-400'>1</div>
      <div className='w-[100px] bg-blue-400'>2</div>
      <div className='w-[100px] bg-blue-400'>3</div>
     </div>
     <br />
     <div className='flex justify-center w-[500px]'>
      <div className='w-[100px] bg-blue-400'>1</div>
      <div className='w-[100px] bg-blue-400'>2</div>
      <div className='w-[100px] bg-blue-400'>3</div>
     </div>
     <br />
     <div className='flex justify-between w-[500px]'>
      <div className='w-[100px] bg-blue-400'>1</div>
      <div className='w-[100px] bg-blue-400'>2</div>
      <div className='w-[100px] bg-blue-400'>3</div>
     </div>
     <br />
     <div className='flex justify-around w-[500px]'>
      <div className='w-[100px] bg-blue-400'>1</div>
      <div className='w-[100px] bg-blue-400'>2</div>
      <div className='w-[100px] bg-blue-400'>3</div>
     </div>
     <br />
     <div className='flex justify-evenly w-[500px]'>
      <div className='w-[100px] bg-blue-400'>1</div>
      <div className='w-[100px] bg-blue-400'>2</div>
      <div className='w-[100px] bg-blue-400'>3</div>
     </div>
    </div>
  )
}
