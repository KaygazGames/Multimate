const versions = [
    {
        version: "V1",
        icon: "🚀",
        subVersions: [
            { version: "V1.1", icon: "🔄", description: "Hata düzeltmeleri ve optimizasyonlar." }
        ]
    },
    {
        version: "V2",
        icon: "⚙️",
        subVersions: [
            { version: "V2.1", icon: "🔄", description: "Performans iyileştirmeleri." },
            { version: "V2.2", icon: "📷", description: "Yeni kamera özellikleri.", subVersions: [
                { version: "V2.2.1", icon: "👁️", description: "Optik stabilizasyon güncellemesi." }
            ] },
            { version: "V2.3", icon: "🎵", description: "Ses motoru güncellendi." }
        ]
    }
];

const versionList = document.getElementById("version-list");

function createVersionItem(version, isSub = false) {
    const listItem = document.createElement("li");
    listItem.classList.add("version-item");
    if (isSub) listItem.classList.add("sub-version");

    listItem.innerHTML = `
        <span class="icon">${version.icon}</span>
        <span>${version.version}</span>
        <p>${version.description || ""}</p>
        <a href="surumler/Multimate Global ${version.version}.zip" class="download-btn">İndir</a>
    `;

    return listItem;
}

versions.forEach(mainVersion => {
    const mainItem = createVersionItem(mainVersion);
    versionList.appendChild(mainItem);

    if (mainVersion.subVersions) {
        const subList = document.createElement("ul");
        subList.classList.add("sub-list");

        mainVersion.subVersions.forEach(subVersion => {
            const subItem = createVersionItem(subVersion, true);
            subList.appendChild(subItem);

            if (subVersion.subVersions) {
                const subSubList = document.createElement("ul");
                subSubList.classList.add("sub-list");

                subVersion.subVersions.forEach(subSubVersion => {
                    const subSubItem = createVersionItem(subSubVersion, true);
                    subSubList.appendChild(subSubItem);
                });

                subItem.appendChild(subSubList);
            }
        });

        mainItem.appendChild(subList);
    }
});
