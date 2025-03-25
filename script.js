document.addEventListener("DOMContentLoaded", function() {
    const versions = [
        "V1",
        "V1.1",
        "V2",
        "V2.1",
        "V2.2",
        "V2.2.1",
        "V2.3"
    ];

    const listContainer = document.getElementById("version-list");

    versions.forEach(version => {
        const listItem = document.createElement("li");
        listItem.classList.add("version-item");

        listItem.innerHTML = `
            <span>Multimate Global ${version}</span>
            <a href="surumler/Multimate Global ${version}.zip" class="download-btn" download>İndir</a>
        `;

        listContainer.appendChild(listItem);
    });
});
