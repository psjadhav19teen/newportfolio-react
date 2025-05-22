const Projects=()=>(
<section className="container p-10 bg-grep-100 text-center" id="projects">
    <div className="box">
        <h2 className="text-3xl font-bold mb-4">
            Projects
        </h2>
    
    <div className="grid gap-4 sm:grid-cols-2">
        {/*project-1 */}
        <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">Project-1</h3>
            <p>Ecommerce Filpkart does online shoping & delivery of products</p>
        </div>
        {/*project-2 */}
        <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">Project-2</h3>
            <p>eLibrary does online issueing and reading books</p>
        </div>
        {/*project-3 */}
        <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">Project-3</h3>
            <p>Petstore does online adopt or donate pets.</p>
        </div>
    </div>
    
    </div>

</section>

)
export default Projects;