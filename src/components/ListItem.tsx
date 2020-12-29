import Link from 'next/link'

export type Props = {
    name: string,
    link?: string,
}

const ListItem = ({ name, link }: Props) => {
    return (
        <Link href={link}>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">{name}</a>
        </Link>
    )
}

export default ListItem