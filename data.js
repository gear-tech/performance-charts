window.BENCHMARK_DATA = {
  "lastUpdate": 1658893813126,
  "repoUrl": "https://github.com/gear-tech/gear",
  "entries": {
    "Gear workspace tests": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658857811585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 4343950,
            "unit": "ms",
            "range": "± 9856826"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 8340,
            "unit": "ms",
            "range": "± 2228"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 8450,
            "unit": "ms",
            "range": "± 1909"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 22240,
            "unit": "ms",
            "range": "± 2990"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 13400,
            "unit": "ms",
            "range": "± 2698"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 117020,
            "unit": "ms",
            "range": "± 9968"
          },
          {
            "name": "pallet-gear - tests::claim_value_from_mailbox_works",
            "value": 16300,
            "unit": "ms",
            "range": "± 2586"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 46480,
            "unit": "ms",
            "range": "± 4936"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 31930,
            "unit": "ms",
            "range": "± 3493"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 21220,
            "unit": "ms",
            "range": "± 3192"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 17970,
            "unit": "ms",
            "range": "± 3096"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 511730,
            "unit": "ms",
            "range": "± 31677"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 15030,
            "unit": "ms",
            "range": "± 3278"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 27320,
            "unit": "ms",
            "range": "± 3762"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 16220,
            "unit": "ms",
            "range": "± 3480"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 65070,
            "unit": "ms",
            "range": "± 6586"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 16440,
            "unit": "ms",
            "range": "± 3628"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 45130,
            "unit": "ms",
            "range": "± 4681"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 17070,
            "unit": "ms",
            "range": "± 3685"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 41930,
            "unit": "ms",
            "range": "± 4756"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 17300,
            "unit": "ms",
            "range": "± 3713"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 18340,
            "unit": "ms",
            "range": "± 4018"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 17930,
            "unit": "ms",
            "range": "± 3860"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 26890,
            "unit": "ms",
            "range": "± 3540"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 27160,
            "unit": "ms",
            "range": "± 4246"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 19450,
            "unit": "ms",
            "range": "± 3821"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 32480,
            "unit": "ms",
            "range": "± 4203"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 18500,
            "unit": "ms",
            "range": "± 3642"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 48490,
            "unit": "ms",
            "range": "± 5518"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 27020,
            "unit": "ms",
            "range": "± 4254"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 14700,
            "unit": "ms",
            "range": "± 4085"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 46050,
            "unit": "ms",
            "range": "± 6037"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 17770,
            "unit": "ms",
            "range": "± 3825"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 17630,
            "unit": "ms",
            "range": "± 4078"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 17710,
            "unit": "ms",
            "range": "± 4354"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 19710,
            "unit": "ms",
            "range": "± 4389"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 18520,
            "unit": "ms",
            "range": "± 4116"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 16720,
            "unit": "ms",
            "range": "± 4106"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 16240,
            "unit": "ms",
            "range": "± 4677"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 16360,
            "unit": "ms",
            "range": "± 3905"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 264670,
            "unit": "ms",
            "range": "± 24947"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 15620,
            "unit": "ms",
            "range": "± 4419"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 15940,
            "unit": "ms",
            "range": "± 4709"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 16670,
            "unit": "ms",
            "range": "± 4449"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 51050,
            "unit": "ms",
            "range": "± 5066"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 35390,
            "unit": "ms",
            "range": "± 4376"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 55710,
            "unit": "ms",
            "range": "± 6299"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 99310,
            "unit": "ms",
            "range": "± 8487"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 60510,
            "unit": "ms",
            "range": "± 6650"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 25720,
            "unit": "ms",
            "range": "± 3544"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 36530,
            "unit": "ms",
            "range": "± 3953"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 25860,
            "unit": "ms",
            "range": "± 4176"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 16950,
            "unit": "ms",
            "range": "± 3598"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 25270,
            "unit": "ms",
            "range": "± 3738"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 16130,
            "unit": "ms",
            "range": "± 4325"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 76190,
            "unit": "ms",
            "range": "± 7045"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 37950,
            "unit": "ms",
            "range": "± 4881"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 21930,
            "unit": "ms",
            "range": "± 4217"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 18440,
            "unit": "ms",
            "range": "± 4443"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 85970,
            "unit": "ms",
            "range": "± 9582"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12790,
            "unit": "ms",
            "range": "± 4067"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 17120,
            "unit": "ms",
            "range": "± 3415"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 17040,
            "unit": "ms",
            "range": "± 3162"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 16810,
            "unit": "ms",
            "range": "± 3764"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10770,
            "unit": "ms",
            "range": "± 3142"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 13130,
            "unit": "ms",
            "range": "± 3892"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12840,
            "unit": "ms",
            "range": "± 3743"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 13100,
            "unit": "ms",
            "range": "± 3502"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 12420,
            "unit": "ms",
            "range": "± 3619"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 12310,
            "unit": "ms",
            "range": "± 3851"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12070,
            "unit": "ms",
            "range": "± 3550"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 12190,
            "unit": "ms",
            "range": "± 3494"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 12250,
            "unit": "ms",
            "range": "± 3904"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 11760,
            "unit": "ms",
            "range": "± 3304"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11970,
            "unit": "ms",
            "range": "± 4313"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 11780,
            "unit": "ms",
            "range": "± 3941"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 12300,
            "unit": "ms",
            "range": "± 3998"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 12160,
            "unit": "ms",
            "range": "± 3738"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 11870,
            "unit": "ms",
            "range": "± 3571"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 11800,
            "unit": "ms",
            "range": "± 3679"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 12100,
            "unit": "ms",
            "range": "± 4526"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9450,
            "unit": "ms",
            "range": "± 3037"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11280,
            "unit": "ms",
            "range": "± 2936"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 11410,
            "unit": "ms",
            "range": "± 3252"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 11980,
            "unit": "ms",
            "range": "± 3569"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 12040,
            "unit": "ms",
            "range": "± 3831"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9220,
            "unit": "ms",
            "range": "± 3491"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 12120,
            "unit": "ms",
            "range": "± 3871"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 13380,
            "unit": "ms",
            "range": "± 3933"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 12390,
            "unit": "ms",
            "range": "± 3982"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 12830,
            "unit": "ms",
            "range": "± 4298"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 12890,
            "unit": "ms",
            "range": "± 4608"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9870,
            "unit": "ms",
            "range": "± 3796"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 13330,
            "unit": "ms",
            "range": "± 4411"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 20130,
            "unit": "ms",
            "range": "± 3110"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 13760,
            "unit": "ms",
            "range": "± 4140"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 19550,
            "unit": "ms",
            "range": "± 2971"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 27280,
            "unit": "ms",
            "range": "± 4020"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22290,
            "unit": "ms",
            "range": "± 2987"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 22320,
            "unit": "ms",
            "range": "± 3343"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 22980,
            "unit": "ms",
            "range": "± 3231"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10800,
            "unit": "ms",
            "range": "± 3162"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 11650,
            "unit": "ms",
            "range": "± 2479"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 10720,
            "unit": "ms",
            "range": "± 2227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658870005954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 4352700,
            "unit": "ms",
            "range": "± 9902394"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 7880,
            "unit": "ms",
            "range": "± 1704"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 8620,
            "unit": "ms",
            "range": "± 1869"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 22140,
            "unit": "ms",
            "range": "± 2946"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 13440,
            "unit": "ms",
            "range": "± 3210"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 114320,
            "unit": "ms",
            "range": "± 9495"
          },
          {
            "name": "pallet-gear - tests::claim_value_from_mailbox_works",
            "value": 16560,
            "unit": "ms",
            "range": "± 2650"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 46730,
            "unit": "ms",
            "range": "± 5818"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 33100,
            "unit": "ms",
            "range": "± 4155"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 21620,
            "unit": "ms",
            "range": "± 3506"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 18000,
            "unit": "ms",
            "range": "± 2935"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 514480,
            "unit": "ms",
            "range": "± 31712"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 15500,
            "unit": "ms",
            "range": "± 3887"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 27840,
            "unit": "ms",
            "range": "± 3746"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 16250,
            "unit": "ms",
            "range": "± 3625"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 63340,
            "unit": "ms",
            "range": "± 6763"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 16250,
            "unit": "ms",
            "range": "± 4133"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 44860,
            "unit": "ms",
            "range": "± 5289"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 17790,
            "unit": "ms",
            "range": "± 3625"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 41650,
            "unit": "ms",
            "range": "± 4637"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 18110,
            "unit": "ms",
            "range": "± 4426"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 18820,
            "unit": "ms",
            "range": "± 4412"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 17620,
            "unit": "ms",
            "range": "± 4505"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 26570,
            "unit": "ms",
            "range": "± 3547"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 26870,
            "unit": "ms",
            "range": "± 4218"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 18060,
            "unit": "ms",
            "range": "± 3446"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 31600,
            "unit": "ms",
            "range": "± 3942"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 17610,
            "unit": "ms",
            "range": "± 3962"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 50150,
            "unit": "ms",
            "range": "± 6462"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 27910,
            "unit": "ms",
            "range": "± 4111"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 15830,
            "unit": "ms",
            "range": "± 4149"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 46550,
            "unit": "ms",
            "range": "± 5862"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 17470,
            "unit": "ms",
            "range": "± 3801"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 17600,
            "unit": "ms",
            "range": "± 4066"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 18200,
            "unit": "ms",
            "range": "± 4345"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 19420,
            "unit": "ms",
            "range": "± 4164"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 18010,
            "unit": "ms",
            "range": "± 3708"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 17030,
            "unit": "ms",
            "range": "± 4407"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 16420,
            "unit": "ms",
            "range": "± 4582"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 17000,
            "unit": "ms",
            "range": "± 4059"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 270310,
            "unit": "ms",
            "range": "± 26998"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 15980,
            "unit": "ms",
            "range": "± 4249"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 15780,
            "unit": "ms",
            "range": "± 3920"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 16020,
            "unit": "ms",
            "range": "± 4774"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 51270,
            "unit": "ms",
            "range": "± 5098"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 35170,
            "unit": "ms",
            "range": "± 4490"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 57260,
            "unit": "ms",
            "range": "± 5778"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 99840,
            "unit": "ms",
            "range": "± 8027"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 61150,
            "unit": "ms",
            "range": "± 5943"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 26030,
            "unit": "ms",
            "range": "± 4763"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 36460,
            "unit": "ms",
            "range": "± 4157"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 26530,
            "unit": "ms",
            "range": "± 4403"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 16330,
            "unit": "ms",
            "range": "± 3808"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 26230,
            "unit": "ms",
            "range": "± 4173"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 16450,
            "unit": "ms",
            "range": "± 4243"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 76950,
            "unit": "ms",
            "range": "± 7597"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 39450,
            "unit": "ms",
            "range": "± 4644"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 22450,
            "unit": "ms",
            "range": "± 4210"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 18090,
            "unit": "ms",
            "range": "± 4084"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 86020,
            "unit": "ms",
            "range": "± 8786"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12200,
            "unit": "ms",
            "range": "± 3560"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 18080,
            "unit": "ms",
            "range": "± 3610"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 17250,
            "unit": "ms",
            "range": "± 3439"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 17350,
            "unit": "ms",
            "range": "± 3011"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10210,
            "unit": "ms",
            "range": "± 3153"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 13200,
            "unit": "ms",
            "range": "± 3802"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12950,
            "unit": "ms",
            "range": "± 3308"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 12750,
            "unit": "ms",
            "range": "± 3011"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 11620,
            "unit": "ms",
            "range": "± 2667"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 11810,
            "unit": "ms",
            "range": "± 3202"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 11500,
            "unit": "ms",
            "range": "± 3238"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 11730,
            "unit": "ms",
            "range": "± 3346"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 11650,
            "unit": "ms",
            "range": "± 3341"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 11800,
            "unit": "ms",
            "range": "± 3301"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11320,
            "unit": "ms",
            "range": "± 3706"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 12090,
            "unit": "ms",
            "range": "± 3108"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 12060,
            "unit": "ms",
            "range": "± 3055"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 11870,
            "unit": "ms",
            "range": "± 3582"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 11190,
            "unit": "ms",
            "range": "± 3139"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 11480,
            "unit": "ms",
            "range": "± 3371"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 11570,
            "unit": "ms",
            "range": "± 3037"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9440,
            "unit": "ms",
            "range": "± 2994"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11290,
            "unit": "ms",
            "range": "± 4109"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 11170,
            "unit": "ms",
            "range": "± 3949"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 11490,
            "unit": "ms",
            "range": "± 3938"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 12170,
            "unit": "ms",
            "range": "± 4034"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9900,
            "unit": "ms",
            "range": "± 3742"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 12570,
            "unit": "ms",
            "range": "± 3826"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 13940,
            "unit": "ms",
            "range": "± 4091"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 12240,
            "unit": "ms",
            "range": "± 4030"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 13270,
            "unit": "ms",
            "range": "± 4647"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 13280,
            "unit": "ms",
            "range": "± 4636"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10880,
            "unit": "ms",
            "range": "± 4297"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 13320,
            "unit": "ms",
            "range": "± 4319"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 20430,
            "unit": "ms",
            "range": "± 2732"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 13190,
            "unit": "ms",
            "range": "± 4256"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 19620,
            "unit": "ms",
            "range": "± 2485"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 26930,
            "unit": "ms",
            "range": "± 4221"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22460,
            "unit": "ms",
            "range": "± 2815"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 21910,
            "unit": "ms",
            "range": "± 2742"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 22870,
            "unit": "ms",
            "range": "± 3173"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11080,
            "unit": "ms",
            "range": "± 3173"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 11690,
            "unit": "ms",
            "range": "± 2252"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 10570,
            "unit": "ms",
            "range": "± 2268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658893803970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 4263670,
            "unit": "ms",
            "range": "± 9333335"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 8160,
            "unit": "ms",
            "range": "± 1968"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 9030,
            "unit": "ms",
            "range": "± 2192"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 21620,
            "unit": "ms",
            "range": "± 2831"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 13580,
            "unit": "ms",
            "range": "± 2627"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 115740,
            "unit": "ms",
            "range": "± 10043"
          },
          {
            "name": "pallet-gear - tests::claim_value_from_mailbox_works",
            "value": 16190,
            "unit": "ms",
            "range": "± 2617"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 46800,
            "unit": "ms",
            "range": "± 5063"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 32870,
            "unit": "ms",
            "range": "± 4080"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 21800,
            "unit": "ms",
            "range": "± 3841"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 17780,
            "unit": "ms",
            "range": "± 3348"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 507280,
            "unit": "ms",
            "range": "± 30422"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 14780,
            "unit": "ms",
            "range": "± 3125"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 27170,
            "unit": "ms",
            "range": "± 4216"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 16230,
            "unit": "ms",
            "range": "± 3202"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 64030,
            "unit": "ms",
            "range": "± 6121"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 16010,
            "unit": "ms",
            "range": "± 3112"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 45550,
            "unit": "ms",
            "range": "± 5004"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 17170,
            "unit": "ms",
            "range": "± 3990"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 43010,
            "unit": "ms",
            "range": "± 4563"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 17590,
            "unit": "ms",
            "range": "± 3768"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 17450,
            "unit": "ms",
            "range": "± 3729"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 17870,
            "unit": "ms",
            "range": "± 4444"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 26800,
            "unit": "ms",
            "range": "± 4059"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 26820,
            "unit": "ms",
            "range": "± 4368"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 18790,
            "unit": "ms",
            "range": "± 3639"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 32270,
            "unit": "ms",
            "range": "± 4039"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 17660,
            "unit": "ms",
            "range": "± 3456"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 48880,
            "unit": "ms",
            "range": "± 5758"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 26970,
            "unit": "ms",
            "range": "± 3661"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 15850,
            "unit": "ms",
            "range": "± 4302"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 45970,
            "unit": "ms",
            "range": "± 5107"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 18100,
            "unit": "ms",
            "range": "± 3702"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 17780,
            "unit": "ms",
            "range": "± 3798"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 18350,
            "unit": "ms",
            "range": "± 4153"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 19240,
            "unit": "ms",
            "range": "± 4037"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 19050,
            "unit": "ms",
            "range": "± 4384"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 17000,
            "unit": "ms",
            "range": "± 4492"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 16330,
            "unit": "ms",
            "range": "± 4128"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 16590,
            "unit": "ms",
            "range": "± 4012"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 264640,
            "unit": "ms",
            "range": "± 25283"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 15580,
            "unit": "ms",
            "range": "± 4303"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 16430,
            "unit": "ms",
            "range": "± 4819"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 16080,
            "unit": "ms",
            "range": "± 4761"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 50450,
            "unit": "ms",
            "range": "± 5269"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 34930,
            "unit": "ms",
            "range": "± 3536"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 57010,
            "unit": "ms",
            "range": "± 5684"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 100500,
            "unit": "ms",
            "range": "± 7523"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 60010,
            "unit": "ms",
            "range": "± 5691"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 25600,
            "unit": "ms",
            "range": "± 3834"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 36320,
            "unit": "ms",
            "range": "± 4004"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 26650,
            "unit": "ms",
            "range": "± 4094"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 16840,
            "unit": "ms",
            "range": "± 4355"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 25290,
            "unit": "ms",
            "range": "± 3550"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 15960,
            "unit": "ms",
            "range": "± 4374"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 77410,
            "unit": "ms",
            "range": "± 6778"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 39040,
            "unit": "ms",
            "range": "± 4604"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 21760,
            "unit": "ms",
            "range": "± 4301"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 17940,
            "unit": "ms",
            "range": "± 3690"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 83650,
            "unit": "ms",
            "range": "± 8915"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12370,
            "unit": "ms",
            "range": "± 4213"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 17640,
            "unit": "ms",
            "range": "± 3551"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 16940,
            "unit": "ms",
            "range": "± 3236"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 17710,
            "unit": "ms",
            "range": "± 3581"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9970,
            "unit": "ms",
            "range": "± 3459"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 12910,
            "unit": "ms",
            "range": "± 3394"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12660,
            "unit": "ms",
            "range": "± 3429"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 13070,
            "unit": "ms",
            "range": "± 3359"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 12720,
            "unit": "ms",
            "range": "± 3423"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 12740,
            "unit": "ms",
            "range": "± 3791"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12130,
            "unit": "ms",
            "range": "± 3874"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 12150,
            "unit": "ms",
            "range": "± 3389"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 12210,
            "unit": "ms",
            "range": "± 3747"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 11820,
            "unit": "ms",
            "range": "± 3332"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11740,
            "unit": "ms",
            "range": "± 3106"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 11620,
            "unit": "ms",
            "range": "± 3337"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 11920,
            "unit": "ms",
            "range": "± 3028"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 11820,
            "unit": "ms",
            "range": "± 3975"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 10880,
            "unit": "ms",
            "range": "± 3308"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 11490,
            "unit": "ms",
            "range": "± 3392"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 11440,
            "unit": "ms",
            "range": "± 3955"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9150,
            "unit": "ms",
            "range": "± 3083"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11110,
            "unit": "ms",
            "range": "± 3671"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 11340,
            "unit": "ms",
            "range": "± 4159"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 11440,
            "unit": "ms",
            "range": "± 4167"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 11320,
            "unit": "ms",
            "range": "± 4303"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9500,
            "unit": "ms",
            "range": "± 3963"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 12660,
            "unit": "ms",
            "range": "± 3935"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 14080,
            "unit": "ms",
            "range": "± 4757"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 13170,
            "unit": "ms",
            "range": "± 4132"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 12870,
            "unit": "ms",
            "range": "± 3724"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 12910,
            "unit": "ms",
            "range": "± 4159"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10250,
            "unit": "ms",
            "range": "± 3787"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 13070,
            "unit": "ms",
            "range": "± 4643"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 20220,
            "unit": "ms",
            "range": "± 2995"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 13820,
            "unit": "ms",
            "range": "± 3721"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 19060,
            "unit": "ms",
            "range": "± 2261"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 27630,
            "unit": "ms",
            "range": "± 3913"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22190,
            "unit": "ms",
            "range": "± 2917"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 21980,
            "unit": "ms",
            "range": "± 3286"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 23070,
            "unit": "ms",
            "range": "± 3265"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11170,
            "unit": "ms",
            "range": "± 3039"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 11460,
            "unit": "ms",
            "range": "± 2277"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 10360,
            "unit": "ms",
            "range": "± 1952"
          }
        ]
      }
    ],
    "Node runtime tests": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658857813853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 35903,
            "unit": "ms",
            "range": "± 11485"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 53295,
            "unit": "ms",
            "range": "± 19857"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 85603,
            "unit": "ms",
            "range": "± 25289"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 181405,
            "unit": "ms",
            "range": "± 26124"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 104835,
            "unit": "ms",
            "range": "± 26419"
          },
          {
            "name": "Async init - approved pong",
            "value": 16825291,
            "unit": "ms",
            "range": "± 259368"
          },
          {
            "name": "Async-await - async-await",
            "value": 214226,
            "unit": "ms",
            "range": "± 12585"
          },
          {
            "name": "Async-await - mutex",
            "value": 204069,
            "unit": "ms",
            "range": "± 20645"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 188075,
            "unit": "ms",
            "range": "± 29725"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 97534,
            "unit": "ms",
            "range": "± 23531"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 9105076,
            "unit": "ms",
            "range": "± 190659"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 9105559,
            "unit": "ms",
            "range": "± 193626"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 9095489,
            "unit": "ms",
            "range": "± 168505"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8957300,
            "unit": "ms",
            "range": "± 173264"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8787256,
            "unit": "ms",
            "range": "± 178324"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8982890,
            "unit": "ms",
            "range": "± 196664"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8969390,
            "unit": "ms",
            "range": "± 195519"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8970171,
            "unit": "ms",
            "range": "± 186390"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4734106,
            "unit": "ms",
            "range": "± 190433"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4905381,
            "unit": "ms",
            "range": "± 171186"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4745780,
            "unit": "ms",
            "range": "± 180435"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4904379,
            "unit": "ms",
            "range": "± 228218"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 539604,
            "unit": "ms",
            "range": "± 35381"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 67557,
            "unit": "ms",
            "range": "± 13172"
          },
          {
            "name": "Chat - chat",
            "value": 126541,
            "unit": "ms",
            "range": "± 23192"
          },
          {
            "name": "Decoder - decoder",
            "value": 48973,
            "unit": "ms",
            "range": "± 18427"
          },
          {
            "name": "Exit code - normal",
            "value": 62890,
            "unit": "ms",
            "range": "± 8859"
          },
          {
            "name": "Exit code - panic",
            "value": 53204,
            "unit": "ms",
            "range": "± 15884"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 233318,
            "unit": "ms",
            "range": "± 34643"
          },
          {
            "name": "Futures-unordered - join",
            "value": 180568,
            "unit": "ms",
            "range": "± 35362"
          },
          {
            "name": "Futures-unordered - select",
            "value": 188548,
            "unit": "ms",
            "range": "± 35477"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 183126,
            "unit": "ms",
            "range": "± 31050"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 66651,
            "unit": "ms",
            "range": "± 8923"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 58241,
            "unit": "ms",
            "range": "± 24831"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 15783915,
            "unit": "ms",
            "range": "± 215801"
          },
          {
            "name": "Multiping - multiping",
            "value": 47554,
            "unit": "ms",
            "range": "± 15578"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 35178,
            "unit": "ms",
            "range": "± 17020"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 40615,
            "unit": "ms",
            "range": "± 15801"
          },
          {
            "name": "Program generator - program_generator",
            "value": 37926,
            "unit": "ms",
            "range": "± 8457"
          },
          {
            "name": "Program_id test - program_id",
            "value": 38450,
            "unit": "ms",
            "range": "± 16214"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 47727,
            "unit": "ms",
            "range": "± 17423"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 36946,
            "unit": "ms",
            "range": "± 12363"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 57327,
            "unit": "ms",
            "range": "± 9719"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 64938,
            "unit": "ms",
            "range": "± 19116"
          },
          {
            "name": "Total time",
            "value": 147492137,
            "unit": "ms",
            "range": "± 1420315"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 21385,
            "unit": "ms",
            "range": "± 12322"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 147105,
            "unit": "ms",
            "range": "± 34409"
          },
          {
            "name": "Wait test - wait",
            "value": 47234,
            "unit": "ms",
            "range": "± 14494"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 81566,
            "unit": "ms",
            "range": "± 18558"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 76607,
            "unit": "ms",
            "range": "± 10773"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8662610,
            "unit": "ms",
            "range": "± 177478"
          },
          {
            "name": "gui test - gui",
            "value": 11202794,
            "unit": "ms",
            "range": "± 208507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658870008063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 37105,
            "unit": "ms",
            "range": "± 15233"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 52284,
            "unit": "ms",
            "range": "± 19154"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 88697,
            "unit": "ms",
            "range": "± 26420"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 182356,
            "unit": "ms",
            "range": "± 22741"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 109010,
            "unit": "ms",
            "range": "± 27339"
          },
          {
            "name": "Async init - approved pong",
            "value": 16544533,
            "unit": "ms",
            "range": "± 160256"
          },
          {
            "name": "Async-await - async-await",
            "value": 212281,
            "unit": "ms",
            "range": "± 12373"
          },
          {
            "name": "Async-await - mutex",
            "value": 201755,
            "unit": "ms",
            "range": "± 23338"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 183182,
            "unit": "ms",
            "range": "± 35040"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 101722,
            "unit": "ms",
            "range": "± 23528"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8956533,
            "unit": "ms",
            "range": "± 162417"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8974850,
            "unit": "ms",
            "range": "± 159836"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8977231,
            "unit": "ms",
            "range": "± 175565"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8857197,
            "unit": "ms",
            "range": "± 165875"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8704384,
            "unit": "ms",
            "range": "± 199293"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8880481,
            "unit": "ms",
            "range": "± 181384"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8881014,
            "unit": "ms",
            "range": "± 165520"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8866860,
            "unit": "ms",
            "range": "± 176830"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4699246,
            "unit": "ms",
            "range": "± 193287"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4848885,
            "unit": "ms",
            "range": "± 166202"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4656662,
            "unit": "ms",
            "range": "± 186908"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4840241,
            "unit": "ms",
            "range": "± 214767"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 534410,
            "unit": "ms",
            "range": "± 37449"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 69205,
            "unit": "ms",
            "range": "± 13154"
          },
          {
            "name": "Chat - chat",
            "value": 123586,
            "unit": "ms",
            "range": "± 25157"
          },
          {
            "name": "Decoder - decoder",
            "value": 51523,
            "unit": "ms",
            "range": "± 17973"
          },
          {
            "name": "Exit code - normal",
            "value": 63243,
            "unit": "ms",
            "range": "± 10869"
          },
          {
            "name": "Exit code - panic",
            "value": 54458,
            "unit": "ms",
            "range": "± 16809"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 237906,
            "unit": "ms",
            "range": "± 33642"
          },
          {
            "name": "Futures-unordered - join",
            "value": 187140,
            "unit": "ms",
            "range": "± 37857"
          },
          {
            "name": "Futures-unordered - select",
            "value": 190882,
            "unit": "ms",
            "range": "± 38433"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 177405,
            "unit": "ms",
            "range": "± 33981"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 68851,
            "unit": "ms",
            "range": "± 8518"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 57843,
            "unit": "ms",
            "range": "± 25030"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 15583479,
            "unit": "ms",
            "range": "± 172399"
          },
          {
            "name": "Multiping - multiping",
            "value": 46216,
            "unit": "ms",
            "range": "± 16698"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 32760,
            "unit": "ms",
            "range": "± 17719"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 38009,
            "unit": "ms",
            "range": "± 14357"
          },
          {
            "name": "Program generator - program_generator",
            "value": 38556,
            "unit": "ms",
            "range": "± 8981"
          },
          {
            "name": "Program_id test - program_id",
            "value": 37865,
            "unit": "ms",
            "range": "± 16317"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 48917,
            "unit": "ms",
            "range": "± 18264"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 39741,
            "unit": "ms",
            "range": "± 13862"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 57362,
            "unit": "ms",
            "range": "± 11785"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 66167,
            "unit": "ms",
            "range": "± 18683"
          },
          {
            "name": "Total time",
            "value": 145627421,
            "unit": "ms",
            "range": "± 663354"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 23243,
            "unit": "ms",
            "range": "± 13268"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 156229,
            "unit": "ms",
            "range": "± 32700"
          },
          {
            "name": "Wait test - wait",
            "value": 50186,
            "unit": "ms",
            "range": "± 16509"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 80549,
            "unit": "ms",
            "range": "± 21470"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 77047,
            "unit": "ms",
            "range": "± 10257"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8552752,
            "unit": "ms",
            "range": "± 187036"
          },
          {
            "name": "gui test - gui",
            "value": 11025356,
            "unit": "ms",
            "range": "± 138514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658893806126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 38134,
            "unit": "ms",
            "range": "± 15365"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 52267,
            "unit": "ms",
            "range": "± 20990"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 85835,
            "unit": "ms",
            "range": "± 25975"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 177282,
            "unit": "ms",
            "range": "± 24289"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 105005,
            "unit": "ms",
            "range": "± 26797"
          },
          {
            "name": "Async init - approved pong",
            "value": 16556922,
            "unit": "ms",
            "range": "± 168652"
          },
          {
            "name": "Async-await - async-await",
            "value": 211728,
            "unit": "ms",
            "range": "± 10052"
          },
          {
            "name": "Async-await - mutex",
            "value": 203871,
            "unit": "ms",
            "range": "± 19942"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 188849,
            "unit": "ms",
            "range": "± 30327"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 99463,
            "unit": "ms",
            "range": "± 22022"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8971202,
            "unit": "ms",
            "range": "± 164443"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8957621,
            "unit": "ms",
            "range": "± 149706"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8999531,
            "unit": "ms",
            "range": "± 153937"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8878978,
            "unit": "ms",
            "range": "± 186174"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8686626,
            "unit": "ms",
            "range": "± 185768"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8825214,
            "unit": "ms",
            "range": "± 154915"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8857122,
            "unit": "ms",
            "range": "± 171311"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8866621,
            "unit": "ms",
            "range": "± 164841"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4699643,
            "unit": "ms",
            "range": "± 201379"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4833459,
            "unit": "ms",
            "range": "± 215784"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4660733,
            "unit": "ms",
            "range": "± 172068"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4824073,
            "unit": "ms",
            "range": "± 195977"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 534716,
            "unit": "ms",
            "range": "± 35414"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 65832,
            "unit": "ms",
            "range": "± 14530"
          },
          {
            "name": "Chat - chat",
            "value": 121741,
            "unit": "ms",
            "range": "± 23857"
          },
          {
            "name": "Decoder - decoder",
            "value": 49201,
            "unit": "ms",
            "range": "± 17335"
          },
          {
            "name": "Exit code - normal",
            "value": 61646,
            "unit": "ms",
            "range": "± 11414"
          },
          {
            "name": "Exit code - panic",
            "value": 49520,
            "unit": "ms",
            "range": "± 16034"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 234549,
            "unit": "ms",
            "range": "± 34303"
          },
          {
            "name": "Futures-unordered - join",
            "value": 183058,
            "unit": "ms",
            "range": "± 33228"
          },
          {
            "name": "Futures-unordered - select",
            "value": 192024,
            "unit": "ms",
            "range": "± 39934"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 177437,
            "unit": "ms",
            "range": "± 34340"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 64967,
            "unit": "ms",
            "range": "± 9176"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 59188,
            "unit": "ms",
            "range": "± 23140"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 15569742,
            "unit": "ms",
            "range": "± 187193"
          },
          {
            "name": "Multiping - multiping",
            "value": 47944,
            "unit": "ms",
            "range": "± 14630"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 32637,
            "unit": "ms",
            "range": "± 16858"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 39747,
            "unit": "ms",
            "range": "± 13079"
          },
          {
            "name": "Program generator - program_generator",
            "value": 36387,
            "unit": "ms",
            "range": "± 7800"
          },
          {
            "name": "Program_id test - program_id",
            "value": 38013,
            "unit": "ms",
            "range": "± 15925"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 45599,
            "unit": "ms",
            "range": "± 16908"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 37711,
            "unit": "ms",
            "range": "± 13083"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 54814,
            "unit": "ms",
            "range": "± 12821"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 62812,
            "unit": "ms",
            "range": "± 18381"
          },
          {
            "name": "Total time",
            "value": 145545627,
            "unit": "ms",
            "range": "± 596247"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 20974,
            "unit": "ms",
            "range": "± 11913"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 142333,
            "unit": "ms",
            "range": "± 30644"
          },
          {
            "name": "Wait test - wait",
            "value": 45926,
            "unit": "ms",
            "range": "± 14248"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 80786,
            "unit": "ms",
            "range": "± 20958"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 75196,
            "unit": "ms",
            "range": "± 10063"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8589229,
            "unit": "ms",
            "range": "± 169909"
          },
          {
            "name": "gui test - gui",
            "value": 11051696,
            "unit": "ms",
            "range": "± 160142"
          }
        ]
      }
    ],
    "pallet-gear host function weights": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658857816147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 6348,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 2955,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 3633,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 3586,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 3659,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 3605,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 3688,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 3628,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 2682,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 3347,
            "unit": "ns"
          },
          {
            "name": "gr_read_per_byte",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 2740,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 2870,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 3903,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 6100,
            "unit": "ns"
          },
          {
            "name": "gr_send_push_per_byte",
            "value": 6,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 18446744073708850,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit_per_byte",
            "value": 227,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 4635,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit_per_byte",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 3582,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 1851,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 3140,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 1643,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 267536,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 187265,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 187711,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 4197,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 279807,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas_per_byte",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 2887,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658870010280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 6195,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 2913,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 3597,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 3616,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 3623,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 3629,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 3616,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 3629,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 2703,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 3367,
            "unit": "ns"
          },
          {
            "name": "gr_read_per_byte",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 2717,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 2915,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 4468,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 5902,
            "unit": "ns"
          },
          {
            "name": "gr_send_push_per_byte",
            "value": 6,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 18446744073708130,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit_per_byte",
            "value": 225,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 4132,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 3587,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 1626,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 3351,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 1617,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 264535,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 183720,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 183217,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 4612,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 276036,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas_per_byte",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 2907,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658893808281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 6239,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 2888,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 3578,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 3632,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 3623,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 3630,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 3610,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 3672,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 2632,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 3362,
            "unit": "ns"
          },
          {
            "name": "gr_read_per_byte",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 2711,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 3510,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 3864,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 6137,
            "unit": "ns"
          },
          {
            "name": "gr_send_push_per_byte",
            "value": 6,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 18446744073708730,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit_per_byte",
            "value": 226,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 4110,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 3589,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 1676,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 3149,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 1677,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 274613,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 190128,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 190441,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 4649,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 286119,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas_per_byte",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 3714,
            "unit": "ns"
          }
        ]
      }
    ],
    "pallet-gear instruction weights": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658857818268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 44,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 381,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 585,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "r#if",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 106,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 37,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 20,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 95,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 44,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 47,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 194,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 217,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 134,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 20,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 5,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 9,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 5,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 0,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658870012372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 451,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 694,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 93,
            "unit": "ns"
          },
          {
            "name": "r#if",
            "value": 93,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 92,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 99,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 112,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 115,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 100,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 152,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 118,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 92,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 91,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 268,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 285,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 174,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 98,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 96,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 89,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 90,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 89,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 92,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 95,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 86,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 86,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 86,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 92,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 104,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 101,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 98,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 100,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 89,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658893810419,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 43,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 379,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 576,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "r#if",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 106,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 12,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 21,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 74,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 45,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 46,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 204,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 236,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 122,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 9,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 9,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 1,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 0,
            "unit": "ns"
          }
        ]
      }
    ],
    "pallet-gear memory weights": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658857820669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "initial_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "allocation_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "grow_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "load_cost",
            "value": 25000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658870014421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "initial_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "allocation_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "grow_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "load_cost",
            "value": 25000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "aeb206e7fc60f6366b44dbc7fe6d2644f981b63a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\truntime/src/lib.rs\n#\tutils/regression-analysis/Cargo.toml",
          "timestamp": "2022-07-26T15:15:54Z",
          "url": "https://github.com/gear-tech/gear/commit/aeb206e7fc60f6366b44dbc7fe6d2644f981b63a"
        },
        "date": 1658893812489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "initial_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "allocation_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "grow_cost",
            "value": 100000,
            "unit": "ns"
          },
          {
            "name": "load_cost",
            "value": 25000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}