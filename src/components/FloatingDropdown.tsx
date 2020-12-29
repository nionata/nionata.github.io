import ListItem, { Props as ListItemProps } from '@components/ListItem'

export type Props = {
    selected: string,
    options: Array<ListItemProps>
}

const FloatingDropdown = ({ selected, options }: Props) => {
    console.log(options)
    return (
        <div className="absolute bottom-5 right-5 text-left">
            {/* Dropdown Options */}
            <div className="relative mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map(option => <ListItem {...option} />)}
                </div>
            </div>

            {/* Button */}
            <div>
                <div>
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        <p>{selected}</p>
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FloatingDropdown