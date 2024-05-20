const Card = ({
    title,
    icon,
    time
}) => {
    return ( 
        <div className="
            rounded-xl
            w-full p-4
            border-[1px]
            border-neutral-900
            flex items-center
            justify-between
            cursor-pointer
            hover:bg-neutral-900
            transition duration-100
        ">
            <div className="flex items-center gap-3">
                {icon}
                <p className="">{title}</p>
            </div>
            <div className="flex items-end gap-1">
                <p className="text-xl">{time}</p>
                <p className="text-sm text-neutral-500">hrs</p>
            </div>
        </div>
     );
}
 
export default Card;