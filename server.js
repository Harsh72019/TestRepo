// This is the main entry file

import app from "./app.js"

// Could have used Nodejs Cluster module but there is no cpu intensive task , most of the tasks are related to I/O which are already outbound to CPU Kernel by Event Loop and handled by the OS. So no need to use cluster module.

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
