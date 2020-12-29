import Link from 'next/link'

export type Props = {
    name: string,
    link?: string,
}

const ListItem = ({ name, link }: Props) => {
    return (
        <div>
            {link ? <Link href={link}>
                        <a>{name}</a>
                    </Link>
                : <p>{name}</p>
            }
        </div>
    )
}

export default ListItem