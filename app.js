// Impor ng required modules
const os = require(&quot;os&quot;); const
fs = require(&quot;fs&quot;); const path =
require(&quot;path&quot;);

// Func on to get system informa on func on getSystemInfo() { const systemInfo = { osType:
os.type(), // Opera ng System type totalMemory: `${(os.totalmem() / 1024 / 1024 /
1024).toFixed(2)} GB`, // Total memory in GB freeMemory: `${(os.freemem() / 1024 / 1024 /
1024).toFixed(2)} GB`, // Free memory in GB cpuDetails: os.cpus().map((cpu, index) =&gt; ({
core: index + 1, model:
cpu.model, speed:
`${cpu.speed} MHz`,
})), // CPU details for each core
};
return systemInfo;
}
// Func on to save system informa on to a log file func
on saveSystemInfoToFile(systemInfo) {
const logsDir = path.join(__dirname, &quot;logs&quot;);
const logFile = path.join(logsDir, &quot;system-info.txt&quot;);

// Ensure the logs directory exists if
(!fs.existsSync(logsDir)) {
fs.mkdirSync(logsDir, { recursive: true });
}
// Format system info as a string
const logData = `
System Informa on Log:
------------------------
OS Type: ${systemInfo.osType}
Total Memory: ${systemInfo.totalMemory}
Free Memory: ${systemInfo.freeMemory}
CPU Details:
${systemInfo.cpuDetails
.map(cpu =&gt; ` - Core ${cpu.core}: ${cpu.model} (${cpu.speed})`)
.join(&quot;\n&quot;)}
------------------------
// Write system informa on to the file fs.writeFileSync(logFile,
logData, &quot;u -8&quot;); console.log(`System informa on has been
saved to: ${logFile}`);
}

// Main execu on func on main() {
console.log(&quot;Fetching system informa on...&quot;);
const systemInfo = getSystemInfo();

console.log(&quot;System Informa on:&quot;);
console.log(systemInfo);

saveSystemInfoToFile(systemInfo);

}
// Execute the script main();
