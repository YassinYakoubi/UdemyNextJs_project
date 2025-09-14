import Link from "next/link"

const links=[
    {href:"/client",label:"client"},
    {href:"/query",label:"query"},
    {href:"/drinks",label:"drinks"},
    {href:"/tasks",label:"tasks"},
]


const Navbar = () => {
  return (
    <div className="py-4 bg-blue-200 h-15 text-center flex justify-baseline items-center p-0 m-0">
      <h1 className="text-red-500">Navbar</h1>
      <Link href='/' className="btn btn-primary">    </Link>
    <ul className="menu menu-horizontal flex justify-center items-center p-0 m-0 mx-auto md:ml-8">
        {
            links.map((link)=>{
                <li className="text-base  p-2 bg-red-100 text-blue-500 border-solid border-black-500 bg-green-10">
                    <Link href={link.href}>{link.label}</Link>
                    </li>
            })
        }
        
    </ul>
    </div>
  )
}

export default Navbar