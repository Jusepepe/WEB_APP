export function LeftArrow({ changeDay, change }: { changeDay: (num: number) => void, change: number }) {
    return (
        <button onClick={() => changeDay(change)} class="hover:cursor-pointer hover:bg-blue-500 p-2 rounded-lg transition-colors flex items-center">
            {/*Past song arrow svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
    )
}

export function RightArrow({ changeDay, change }: { changeDay: (num: number) => void, change: number }) {
    return (
        <button onClick={() => changeDay(change)} class="hover:cursor-pointer hover:bg-blue-500 p-2 rounded-lg transition-colors flex items-center">
            {/* Fast forward svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
            </svg>
        </button>
    )
}