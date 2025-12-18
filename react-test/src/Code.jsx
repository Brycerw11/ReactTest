function Code(props) {
    return(
        <div id="code-container" className="bg-slate-700 rounded-xl m-[1rem] p-[1rem] w-fit min-w-[10vw] max-w-code">
            <div id="header" className="flex flex-row justify-between align-center items-center">
                <div>
                    <div id="title" className="text-2xl font-bold mb-[0.2rem]">{props.title}</div>
                    <div id="description">{props.description}</div>    
                </div>
                <div id="copy-button" className="size-[2.3rem] border-3 rounded-lg ml-[0.5rem] hover:bg-slate-800 transition-colors duration-250 flex justify-center items-center hover:text-gray-300" onClick={() => copyToClipboard(props.code)} title="Copy to Clipboard">
                    <i className="fa-solid fa-copy fa-xl"></i>
                </div>
            </div>

            <div id="code-container" className="bg-slate-950 p-[1rem] mt-[0.5rem] rounded-xl overflow-x-auto">
                <code className="font-mono whitespace-pre">{props.code}</code>
            </div>
        </div>
    )
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard successfully!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}


export default Code