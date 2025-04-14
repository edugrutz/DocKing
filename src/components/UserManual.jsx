import React from 'react';

const UserManual = () => {
  return (
    <div className="container py-5 text-light fs-4">
      <h1 className="mb-4">📘 DocKing User Manual</h1>

      <section className="mb-5">
        <h2>Overview</h2>
        <p>
          <strong>DocKing</strong> is a graphical application designed to simplify the molecular docking process. 
          It allows users to load ligands and receptors, configure docking parameters, and visualize results easily.
        </p>
      </section>

      <section className="mb-5">
        <h2>Installation</h2>
        <p>
          Download the application from: <a href="https://edugrutz.github.io/DocKing/#/" target="_blank" rel="noreferrer">https://edugrutz.github.io/DocKing</a><br />
          Run the installer and follow the setup instructions.
        </p>
      </section>

      <section className="mb-5">
        <h2>How to Use</h2>
        <ol>
          <li>Launch DocKing.</li>
          <li>Upload your ligand and receptor files.</li>
          <li>Configure docking parameters as needed.</li>
          <li>Click on <strong>Run Docking</strong>.</li>
          <li>Review the output files and docking results.</li>
        </ol>
      </section>

      <section className="mb-5">
        <h2>Supported File Formats</h2>
        <ul>
          <li><code>.pdb</code>, <code>.mol2</code>, <code>.pdbqt</code> for ligands and receptors</li>
          <li>Docking results in <code>.pdbqt</code> format with logs</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Troubleshooting</h2>
        <ul>
          <li><strong>Invalid file:</strong> Make sure your structure is valid and in the correct format.</li>
          <li><strong>Docking fails:</strong> Check if all required parameters are filled and that dependencies like AutoDock/Vina are correctly configured.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Contact & Support</h2>
        <p>
          Need help? Contact the developer at <a href="mailto:grutzmann9@gmail.com">support@dockking.app</a>
        </p>
      </section>

      <footer className="text-center text-muted mt-5">
        &copy; 2025 DocKing. All rights reserved.
      </footer>
    </div>
  );
};

export default UserManual;
