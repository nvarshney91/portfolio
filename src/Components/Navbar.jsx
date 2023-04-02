function Navbar(){
    return(
        <div className="rounded-2xl px-4 py-3 bg-zinc-100 text-zinc-900 container mx-auto flex items-center justify-center">
            <h1 className="text-5xl font-bolder">BATMAN</h1>

            <div className="ml-auto flex gap-5 text-3xl font-primary">
                <span className="rounded-xl bg-zinc-900 text-zinc-100 p-2">Projects</span>
                <span className="rounded-xl bg-zinc-900 text-zinc-100 p-2">About</span>
                <span className="rounded-xl bg-zinc-900 text-zinc-100 p-2">Contact</span>
            </div>
        </div>
    )
}

export default Navbar;