import TableWorkerComplete from "../components/TableWorkerComplete.tsx";


const workerData = [
  { Name: 'Worker 1', status: 'ON', lastConnection: '2023-01-01', origin: 'Lambda' },
  { Name: 'Worker 2', status: 'OFF', lastConnection: '2023-02-15', origin: 'Delta' },
  { Name: 'Worker 3', status: 'ON', lastConnection: '2023-03-20', origin: 'Alpha' },
  { Name: 'Worker 4', status: 'OFF', lastConnection: '2023-04-05', origin: 'Beta' },
  { Name: 'Worker 5', status: 'ON', lastConnection: '2023-05-10', origin: 'Gamma' },
  { Name: 'Worker 6', status: 'OFF', lastConnection: '2023-06-25', origin: 'Sigma' },
  { Name: 'Worker 7', status: 'ON', lastConnection: '2023-07-12', origin: 'Omega' },
  { Name: 'Worker 8', status: 'OFF', lastConnection: '2023-08-30', origin: 'Theta' },
  { Name: 'Worker 9', status: 'ON', lastConnection: '2023-09-18', origin: 'Kappa' },
  { Name: 'Worker 10', status: 'OFF', lastConnection: '2023-10-03', origin: 'Zeta' },
  { Name: 'Worker 11', status: 'ON', lastConnection: '2023-11-11', origin: 'Epsilon' },
  { Name: 'Worker 12', status: 'OFF', lastConnection: '2023-12-22', origin: 'Iota' },
  { Name: 'Worker 13', status: 'ON', lastConnection: '2024-01-07', origin: 'Delta' },
  { Name: 'Worker 14', status: 'OFF', lastConnection: '2024-02-14', origin: 'Beta' },
  { Name: 'Worker 15', status: 'ON', lastConnection: '2024-03-29', origin: 'Gamma' },
  { Name: 'Worker 16', status: 'OFF', lastConnection: '2024-04-16', origin: 'Sigma' },
  { Name: 'Worker 17', status: 'ON', lastConnection: '2024-05-21', origin: 'Omega' },
  { Name: 'Worker 18', status: 'OFF', lastConnection: '2024-06-08', origin: 'Theta' },
  { Name: 'Worker 19', status: 'ON', lastConnection: '2024-07-25', origin: 'Kappa' },
  { Name: 'Worker 20', status: 'OFF', lastConnection: '2024-08-12', origin: 'Zeta' },
  { Name: 'Worker 21', status: 'ON', lastConnection: '2024-09-27', origin: 'Epsilon' },
  { Name: 'Worker 22', status: 'OFF', lastConnection: '2024-10-15', origin: 'Iota' },
  { Name: 'Worker 23', status: 'ON', lastConnection: '2024-11-30', origin: 'Delta' },
  { Name: 'Worker 24', status: 'OFF', lastConnection: '2024-12-17', origin: 'Beta' },
  { Name: 'Worker 25', status: 'ON', lastConnection: '2025-01-01', origin: 'Gamma' },
  { Name: 'Worker 26', status: 'OFF', lastConnection: '2025-02-08', origin: 'Sigma' },
  { Name: 'Worker 27', status: 'ON', lastConnection: '2025-03-15', origin: 'Omega' },
  { Name: 'Worker 28', status: 'OFF', lastConnection: '2025-04-02', origin: 'Theta' },
  { Name: 'Worker 29', status: 'ON', lastConnection: '2025-05-17', origin: 'Kappa' },
  { Name: 'Worker 30', status: 'OFF', lastConnection: '2025-06-04', origin: 'Zeta' },
  { Name: 'Worker 31', status: 'ON', lastConnection: '2025-07-19', origin: 'Epsilon' },
  { Name: 'Worker 31', status: 'ON', lastConnection: '2025-07-19', origin: 'Epsilon' },
  { Name: 'Worker 31', status: 'ON', lastConnection: '2025-07-19', origin: 'Epsilon' },

];

const WorkersHistory = () => {
  return (
    <div className="column-dbos-center" style={{ minHeight: '100vh', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F9F9F9' }}>
      <br/>
      <h2 style={{marginBottom: '60px' }}>Workers History</h2>
      <TableWorkerComplete dataPoints={workerData}/>
    </div>
  );
};

export default WorkersHistory;
