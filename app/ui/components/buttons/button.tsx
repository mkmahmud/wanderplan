import Link from "next/link";

export default function Button({ text, path, icon, outsideLink, func }: any) {
    return (

        <div>

            {
                path && <button className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none font-semibold transition duration-300 ease-in-out">
                    <Link href={path} className="flex items-center ">

                        <span>{text}</span>
                        {icon && <span className="ml-2">{icon}</span>}
                    </Link>

                </button>
            }

            {
                outsideLink && <button className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none font-semibold transition duration-300 ease-in-out">
                    <a href={outsideLink} target="_blank" rel="noopener noreferrer" className="flex items-center ">
                        <span>{text}</span>
                        {icon && <span className="ml-2">{icon}</span>}
                    </a>

                </button>
            }

            {
                func && <button onClick={func} className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none font-semibold transition duration-300 ease-in-out">


                    {text && <span className="mr-2">{text}</span>}
                    {icon && <span  >{icon}</span>}


                </button>
            }


        </div>
    );
}