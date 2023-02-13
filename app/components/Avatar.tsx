export default function Avatar() {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-6">
        <img className="w-16 h-16 object-cover object-top rounded-full" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
      </div>
      <div className="text-left">
        <h3 className="mb-2 text-2xl font-semibold font-heading">Esther Bailey</h3>
        <p className="text-gray-500">February 26, 2021</p>
      </div>
    </div>
  )
}
