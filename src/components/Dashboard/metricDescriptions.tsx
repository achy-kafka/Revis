const descriptions = {
  total_net_output_bytes: 'The total number of bytes written to the network',
  used_memory: 'Total number of bytes allocated by Redis using its allocator',
  connected_clients: 'Number of client connections (excluding connections from replicas)',
  evicted_keys: 'Number of evicted keys due to maxmemory limit',
  keyspace_hits: 'Number of successful lookup of keys in the main dictionary',
  keyspace_misses: 'Number of failed lookup of keys in the main dictionary',
  total_net_input_bytes: 'The total number of bytes read from the network',
  uptime_in_seconds: 'Number of seconds since Redis server start',
  client_longest_output_list: 'Longest output list among current client connections',
  client_biggest_input_buf: 'Biggest input buffer among current client connections',
  blocked_clients: 'Number of clients pending on a blocking call (BLPOP, BRPOP, BRPOPLPUSH, BLMOVE, BZPOPMIN, BZPOPMAX)',
  maxclients: 'The  sum of connected_clients, connected_slaves and cluster_connections',
  used_memory_rss: 'Number of bytes that Redis allocated as seen by the operating system (a.k.a resident set size). This is the number reported by tools such as top(1) and ps(1)',
  used_memory_peak: 'Peak memory consumed by Redis (in bytes)',
  total_connections_received: 'Total number of connections accepted by the server',
  total_commands_processed: 'Total number of commands processed by the server',
  instantaneous_ops_per_sec: 'Number of commands processed per second',
  instantaneous_input_kbps: 'The network\'s read rate per second in KB/sec',
  instantaneous_output_kbps: 'The network\'s write rate per second in KB/sec',
  rejected_connections: 'Number of connections rejected because of maxclients limit',
  total_error_replies: 'Total number of issued error replies, that is the sum of rejected commands (errors prior command execution) and failed commands (errors within the command execution)',
  used_cpu_sys: 'System CPU consumed by the Redis server, which is the sum of system CPU consumed by all threads of the server process (main thread and background threads)',
  used_cpu_user: 'User CPU consumed by the Redis server, which is the sum of user CPU consumed by all threads of the server process (main thread and background threads)',
  used_cpu_sys_children: 'System CPU consumed by the background processes',
  used_cpu_user_children: 'User CPU consumed by the background processes',
  used_cpu_sys_main_thread: 'System CPU consumed by the Redis server main thread',
  used_cpu_user_main_thread: 'User CPU consumed by the Redis server main thread',

//     connected_clients: Number of client connections (excluding connections from replicas)
//     cluster_connections: An approximation of the number of sockets used by the cluster's bus
//     tracking_clients: Number of clients being tracked (CLIENT TRACKING)
//     clients_in_timeout_table: Number of clients in the clients timeout table
//     io_threads_active: Flag indicating if I/O threads are active
//     used_memory_overhead: The sum in bytes of all overheads that the server allocated for managing its internal data structures
//     used_memory_startup: Initial amount of memory consumed by Redis at startup in bytes
//     used_memory_dataset: The size in bytes of the dataset (used_memory_overhead subtracted from used_memory)
//     used_memory_dataset_perc: The percentage of used_memory_dataset out of the net memory usage (used_memory minus used_memory_startup)
//     total_system_memory: The total amount of memory that the Redis host has
//     total_system_memory_human: Human readable representation of previous value
//     used_memory_lua: Number of bytes used by the Lua engine
//     used_memory_lua_human: Human readable representation of previous value
//     used_memory_scripts: Number of bytes used by cached Lua scripts
//     used_memory_scripts_human: Human readable representation of previous value
//     maxmemory: The value of the maxmemory configuration directive
//     maxmemory_human: Human readable representation of previous value
//     maxmemory_policy: The value of the maxmemory-policy configuration directive
//     mem_fragmentation_ratio: Ratio between used_memory_rss and used_memory. Note that this doesn't only includes fragmentation, but also other process overheads (see the allocator_* metrics), and also overheads like code, shared libraries, stack, etc.
//     mem_fragmentation_bytes: Delta between used_memory_rss and used_memory. Note that when the total fragmentation bytes is low (few megabytes), a high ratio (e.g. 1.5 and above) is not an indication of an issue.
//     allocator_frag_ratio:: Ratio between allocator_active and allocator_allocated. This is the true (external) fragmentation metric (not mem_fragmentation_ratio).
//     allocator_frag_bytes Delta between allocator_active and allocator_allocated. See note about mem_fragmentation_bytes.
//     allocator_rss_ratio: Ratio between allocator_resident and allocator_active. This usually indicates pages that the allocator can and probably will soon release back to the OS.
//     allocator_rss_bytes: Delta between allocator_resident and allocator_active
//     rss_overhead_ratio: Ratio between used_memory_rss (the process RSS) and allocator_resident. This includes RSS overheads that are not allocator or heap related.
//     rss_overhead_bytes: Delta between used_memory_rss (the process RSS) and allocator_resident
//     allocator_allocated: Total bytes allocated form the allocator, including internal-fragmentation. Normally the same as used_memory.
//     allocator_active: Total bytes in the allocator active pages, this includes external-fragmentation.
//     allocator_resident: Total bytes resident (RSS) in the allocator, this includes pages that can be released to the OS (by MEMORY PURGE, or just waiting).
//     mem_allocator: Memory allocator, chosen at compile time.
//     active_defrag_running: When activedefrag is enabled, this indicates whether defragmentation is currently active, and the CPU percentage it intends to utilize.
//     lazyfree_pending_objects: The number of objects waiting to be freed (as a result of calling UNLINK, or FLUSHDB and FLUSHALL with the ASYNC option)
//     loading: Flag indicating if the load of a dump file is on-going
//     current_cow_peak: The peak size in bytes of copy-on-write memory while a child fork is running
//     current_cow_size: The size in bytes of copy-on-write memory while a child fork is running
//     current_fork_perc: The percentage of progress of the current fork process. For AOF and RDB forks it is the percentage of current_save_keys_processed out of current_save_keys_total.
//     current_save_keys_processed: Number of keys processed by the current save operation
//     current_save_keys_total: Number of keys at the beginning of the current save operation
//     rdb_changes_since_last_save: Number of changes since the last dump
//     rdb_bgsave_in_progress: Flag indicating a RDB save is on-going
//     rdb_last_save_time: Epoch-based timestamp of last successful RDB save
//     rdb_last_bgsave_status: Status of the last RDB save operation
//     rdb_last_bgsave_time_sec: Duration of the last RDB save operation in seconds
//     rdb_current_bgsave_time_sec: Duration of the on-going RDB save operation if any
//     rdb_last_cow_size: The size in bytes of copy-on-write memory during the last RDB save operation
//     aof_enabled: Flag indicating AOF logging is activated
//     aof_rewrite_in_progress: Flag indicating a AOF rewrite operation is on-going
//     aof_rewrite_scheduled: Flag indicating an AOF rewrite operation will be scheduled once the on-going RDB save is complete.
//     aof_last_rewrite_time_sec: Duration of the last AOF rewrite operation in seconds
//     aof_current_rewrite_time_sec: Duration of the on-going AOF rewrite operation if any
//     aof_last_bgrewrite_status: Status of the last AOF rewrite operation
//     aof_last_write_status: Status of the last write operation to the AOF
//     aof_last_cow_size: The size in bytes of copy-on-write memory during the last AOF rewrite operation
//     module_fork_in_progress: Flag indicating a module fork is on-going
//     module_fork_last_cow_size: The size in bytes of copy-on-write memory during the last module fork operation
// If AOF is activated, these additional fields will be added:
//     aof_current_size: AOF current file size
//     aof_base_size: AOF file size on latest startup or rewrite
//     aof_pending_rewrite: Flag indicating an AOF rewrite operation will be scheduled once the on-going RDB save is complete.
//     aof_buffer_length: Size of the AOF buffer
//     aof_rewrite_buffer_length: Size of the AOF rewrite buffer
//     aof_pending_bio_fsync: Number of fsync pending jobs in background I/O queue
//     aof_delayed_fsync: Delayed fsync counter
// If a load operation is on-going, these additional fields will be added:
//     loading_start_time: Epoch-based timestamp of the start of the load operation
//     loading_total_bytes: Total file size
//     loading_rdb_used_mem: The memory usage of the server that had generated the RDB file at the time of the file's creation
//     loading_loaded_bytes: Number of bytes already loaded
//     loading_loaded_perc: Same value expressed as a percentage
//     loading_eta_seconds: ETA in seconds for the load to be complete

//     total_connections_received: Total number of connections accepted by the server
//     total_commands_processed: Total number of commands processed by the server
//     instantaneous_ops_per_sec: Number of commands processed per second
//     total_net_input_bytes: The total number of bytes read from the network
//     total_net_output_bytes: The total number of bytes written to the network
//     instantaneous_input_kbps: The network's read rate per second in KB/sec
//     instantaneous_output_kbps: The network's write rate per second in KB/sec
//     rejected_connections: Number of connections rejected because of maxclients limit
//     sync_full: The number of full resyncs with replicas
//     sync_partial_ok: The number of accepted partial resync requests
//     sync_partial_err: The number of denied partial resync requests
//     expired_keys: Total number of key expiration events
//     expired_stale_perc: The percentage of keys probably expired
//     expired_time_cap_reached_count: The count of times that active expiry cycles have stopped early
//     expire_cycle_cpu_milliseconds: The cumulative amount of time spend on active expiry cycles
//     evicted_keys: Number of evicted keys due to maxmemory limit
//     total_eviction_exceeded_time: Total time used_memory was greater than maxmemory since server startup, in milliseconds
//     current_eviction_exceeded_time: The time passed since used_memory last rose above maxmemory, in milliseconds
//     keyspace_hits: Number of successful lookup of keys in the main dictionary
//     keyspace_misses: Number of failed lookup of keys in the main dictionary
//     pubsub_channels: Global number of pub/sub channels with client subscriptions
//     pubsub_patterns: Global number of pub/sub pattern with client subscriptions
//     latest_fork_usec: Duration of the latest fork operation in microseconds
//     total_forks: Total number of fork operations since the server start
//     migrate_cached_sockets: The number of sockets open for MIGRATE purposes
//     slave_expires_tracked_keys: The number of keys tracked for expiry purposes (applicable only to writable replicas)
//     active_defrag_hits: Number of value reallocations performed by active the defragmentation process
//     active_defrag_misses: Number of aborted value reallocations started by the active defragmentation process
//     active_defrag_key_hits: Number of keys that were actively defragmented
//     active_defrag_key_misses: Number of keys that were skipped by the active defragmentation process
//     total_active_defrag_time: Total time memory fragmentation was over the limit, in milliseconds
//     current_active_defrag_time: The time passed since memory fragmentation last was over the limit, in milliseconds
//     tracking_total_keys: Number of keys being tracked by the server
//     tracking_total_items: Number of items, that is the sum of clients number for each key, that are being tracked
//     tracking_total_prefixes: Number of tracked prefixes in server's prefix table (only applicable for broadcast mode)
//     unexpected_error_replies: Number of unexpected error replies, that are types of errors from an AOF load or replication
//     total_error_replies: Total number of issued error replies, that is the sum of rejected commands (errors prior command execution) and failed commands (errors within the command execution)
//     total_reads_processed: Total number of read events processed
//     total_writes_processed: Total number of write events processed
//     io_threaded_reads_processed: Number of read events processed by the main and I/O threads
//     io_threaded_writes_processed: Number of write events processed by the main and I/O threads
// role: Value is "master" if the instance is replica of no one, or "slave" if the instance is a replica of some master instance. Note that a replica can be master of another replica (chained replication).
// master_failover_state: The state of an ongoing failover, if any.
// master_replid: The replication ID of the Redis server.
// master_replid2: The secondary replication ID, used for PSYNC after a failover.
// master_repl_offset: The server's current replication offset
// second_repl_offset: The offset up to which replication IDs are accepted
// repl_backlog_active: Flag indicating replication backlog is active
// repl_backlog_size: Total size in bytes of the replication backlog buffer
// repl_backlog_first_byte_offset: The master offset of the replication backlog buffer
// repl_backlog_histlen: Size in bytes of the data in the replication backlog buffer
// If the instance is a replica, these additional fields are provided:

//     master_host: Host or IP address of the master
//     master_port: Master listening TCP port
//     master_link_status: Status of the link (up/down)
//     master_last_io_seconds_ago: Number of seconds since the last interaction with master
//     master_sync_in_progress: Indicate the master is syncing to the replica
//     slave_repl_offset: The replication offset of the replica instance
//     slave_priority: The priority of the instance as a candidate for failover
//     slave_read_only: Flag indicating if the replica is read-only

// If a SYNC operation is on-going, these additional fields are provided:

//     master_sync_total_bytes: Total number of bytes that need to be transferred. this may be 0 when the size is unknown (for example, when the repl-diskless-sync configuration directive is used)
//     master_sync_read_bytes: Number of bytes already transferred
//     master_sync_left_bytes: Number of bytes left before syncing is complete (may be negative when master_sync_total_bytes is 0)
//     master_sync_perc: The percentage master_sync_read_bytes from master_sync_total_bytes, or an approximation that uses loading_rdb_used_mem when master_sync_total_bytes is 0
//     master_sync_last_io_seconds_ago: Number of seconds since last transfer I/O during a SYNC operation

// If the link between master and replica is down, an additional field is provided:

//     master_link_down_since_seconds: Number of seconds since the link is down

// The following field is always provided:

//     connected_slaves: Number of connected replicas

// If the server is configured with the min-slaves-to-write (or starting with Redis 5 with the min-replicas-to-write) directive, an additional field is provided:

//     min_slaves_good_slaves: Number of replicas currently considered good

// For each replica, the following line is added:

//     slaveXXX: id, IP address, port, state, offset, lag
}

export default descriptions;
