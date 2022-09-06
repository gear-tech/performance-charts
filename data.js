window.BENCHMARK_DATA = {
  "lastUpdate": 1662463448659,
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
          "id": "b5ada31418ade851e28596b9880b22c5a216ebe9",
          "message": "Don't fail on alert",
          "timestamp": "2022-08-10T17:11:14Z",
          "url": "https://github.com/gear-tech/gear/commit/b5ada31418ade851e28596b9880b22c5a216ebe9"
        },
        "date": 1660153573235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 38304333,
            "unit": "ms",
            "range": "± 49666252"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12333,
            "unit": "ms",
            "range": "± 2494"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 11000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 23333,
            "unit": "ms",
            "range": "± 2624"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 15666,
            "unit": "ms",
            "range": "± 1247"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 97666,
            "unit": "ms",
            "range": "± 6649"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 20000,
            "unit": "ms",
            "range": "± 4082"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 42000,
            "unit": "ms",
            "range": "± 3559"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 27000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 22000,
            "unit": "ms",
            "range": "± 816"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 21000,
            "unit": "ms",
            "range": "± 816"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 324000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 19333,
            "unit": "ms",
            "range": "± 2494"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 22666,
            "unit": "ms",
            "range": "± 2624"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 21333,
            "unit": "ms",
            "range": "± 3091"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 55666,
            "unit": "ms",
            "range": "± 8576"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 18000,
            "unit": "ms",
            "range": "± 2449"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 38666,
            "unit": "ms",
            "range": "± 4496"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 20333,
            "unit": "ms",
            "range": "± 6128"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 26000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 33000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 21333,
            "unit": "ms",
            "range": "± 1247"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 38666,
            "unit": "ms",
            "range": "± 5557"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 17666,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 16333,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 18666,
            "unit": "ms",
            "range": "± 3091"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 31000,
            "unit": "ms",
            "range": "± 4242"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 25000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 18000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::missing_handle_is_not_executed",
            "value": 18666,
            "unit": "ms",
            "range": "± 942"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 20666,
            "unit": "ms",
            "range": "± 942"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 34666,
            "unit": "ms",
            "range": "± 9428"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 15666,
            "unit": "ms",
            "range": "± 2054"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 43000,
            "unit": "ms",
            "range": "± 7483"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 31000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 22666,
            "unit": "ms",
            "range": "± 3299"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 42333,
            "unit": "ms",
            "range": "± 4027"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 23666,
            "unit": "ms",
            "range": "± 8013"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 16333,
            "unit": "ms",
            "range": "± 942"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 16000,
            "unit": "ms",
            "range": "± 3741"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 21333,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 19666,
            "unit": "ms",
            "range": "± 942"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 17000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 224000,
            "unit": "ms",
            "range": "± 30626"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 11666,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 17666,
            "unit": "ms",
            "range": "± 4027"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 15666,
            "unit": "ms",
            "range": "± 3681"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 47666,
            "unit": "ms",
            "range": "± 2494"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 39000,
            "unit": "ms",
            "range": "± 2828"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 63333,
            "unit": "ms",
            "range": "± 4642"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 93000,
            "unit": "ms",
            "range": "± 6164"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 60333,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 23666,
            "unit": "ms",
            "range": "± 2054"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 30333,
            "unit": "ms",
            "range": "± 3299"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 24000,
            "unit": "ms",
            "range": "± 4320"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 40000,
            "unit": "ms",
            "range": "± 2943"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 16666,
            "unit": "ms",
            "range": "± 1247"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 30000,
            "unit": "ms",
            "range": "± 3741"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 16333,
            "unit": "ms",
            "range": "± 2867"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 81666,
            "unit": "ms",
            "range": "± 2494"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 40333,
            "unit": "ms",
            "range": "± 6018"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 23666,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 15333,
            "unit": "ms",
            "range": "± 2054"
          },
          {
            "name": "pallet-gear - tests::upload_program_expected_failure",
            "value": 15000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear - tests::upload_program_fails_on_duplicate_id",
            "value": 16333,
            "unit": "ms",
            "range": "± 2494"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 79333,
            "unit": "ms",
            "range": "± 7408"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11333,
            "unit": "ms",
            "range": "± 471"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 17333,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 16333,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 13666,
            "unit": "ms",
            "range": "± 3091"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9333,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 13666,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 13000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 13666,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 11333,
            "unit": "ms",
            "range": "± 3399"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 9333,
            "unit": "ms",
            "range": "± 2624"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12333,
            "unit": "ms",
            "range": "± 1247"
          },
          {
            "name": "pallet-gear-gas - tests::lock_works",
            "value": 11000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 11000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 8666,
            "unit": "ms",
            "range": "± 1247"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 12333,
            "unit": "ms",
            "range": "± 2357"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 13000,
            "unit": "ms",
            "range": "± 816"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 11666,
            "unit": "ms",
            "range": "± 942"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 10333,
            "unit": "ms",
            "range": "± 2054"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 10666,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 11666,
            "unit": "ms",
            "range": "± 2494"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 9666,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9000,
            "unit": "ms",
            "range": "± 1414"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11000,
            "unit": "ms",
            "range": "± 3741"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 12666,
            "unit": "ms",
            "range": "± 2867"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 12666,
            "unit": "ms",
            "range": "± 3299"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 15333,
            "unit": "ms",
            "range": "± 4189"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9666,
            "unit": "ms",
            "range": "± 1885"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 12333,
            "unit": "ms",
            "range": "± 4784"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 13000,
            "unit": "ms",
            "range": "± 4546"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 15333,
            "unit": "ms",
            "range": "± 3091"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 12000,
            "unit": "ms",
            "range": "± 3741"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 16666,
            "unit": "ms",
            "range": "± 471"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 13333,
            "unit": "ms",
            "range": "± 4496"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 16333,
            "unit": "ms",
            "range": "± 3399"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 23333,
            "unit": "ms",
            "range": "± 1699"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 13333,
            "unit": "ms",
            "range": "± 471"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 21333,
            "unit": "ms",
            "range": "± 942"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 29000,
            "unit": "ms",
            "range": "± 2160"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 24000,
            "unit": "ms",
            "range": "± 816"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 20000,
            "unit": "ms",
            "range": "± 816"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 24000,
            "unit": "ms",
            "range": "± 1414"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10000,
            "unit": "ms",
            "range": "± 2449"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 13000,
            "unit": "ms",
            "range": "± 1632"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 12000,
            "unit": "ms",
            "range": "± 1632"
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
          "id": "957e60d81fc9df3d69bbf1dc0eb01e1a153dc638",
          "message": "Set COUNT to 100",
          "timestamp": "2022-08-11T11:47:41Z",
          "url": "https://github.com/gear-tech/gear/commit/957e60d81fc9df3d69bbf1dc0eb01e1a153dc638"
        },
        "date": 1660225569335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 4028900,
            "unit": "ms",
            "range": "± 9354771"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11620,
            "unit": "ms",
            "range": "± 3267"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 12720,
            "unit": "ms",
            "range": "± 3773"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 24970,
            "unit": "ms",
            "range": "± 4160"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 15710,
            "unit": "ms",
            "range": "± 3547"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 101770,
            "unit": "ms",
            "range": "± 10610"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 19070,
            "unit": "ms",
            "range": "± 3685"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 42810,
            "unit": "ms",
            "range": "± 5731"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 30660,
            "unit": "ms",
            "range": "± 5185"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 21770,
            "unit": "ms",
            "range": "± 4086"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 20120,
            "unit": "ms",
            "range": "± 3955"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 327860,
            "unit": "ms",
            "range": "± 28146"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 17420,
            "unit": "ms",
            "range": "± 4320"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 24130,
            "unit": "ms",
            "range": "± 4776"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 18020,
            "unit": "ms",
            "range": "± 3901"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 57850,
            "unit": "ms",
            "range": "± 6909"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 18850,
            "unit": "ms",
            "range": "± 4944"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 42080,
            "unit": "ms",
            "range": "± 4759"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 19890,
            "unit": "ms",
            "range": "± 4945"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 27250,
            "unit": "ms",
            "range": "± 3842"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 33820,
            "unit": "ms",
            "range": "± 3824"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 25440,
            "unit": "ms",
            "range": "± 4355"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 41690,
            "unit": "ms",
            "range": "± 5220"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 18180,
            "unit": "ms",
            "range": "± 3811"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 19790,
            "unit": "ms",
            "range": "± 4671"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 18400,
            "unit": "ms",
            "range": "± 4800"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 27010,
            "unit": "ms",
            "range": "± 4306"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 27080,
            "unit": "ms",
            "range": "± 4877"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 19370,
            "unit": "ms",
            "range": "± 3938"
          },
          {
            "name": "pallet-gear - tests::missing_handle_is_not_executed",
            "value": 17450,
            "unit": "ms",
            "range": "± 3927"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 18600,
            "unit": "ms",
            "range": "± 3914"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 26930,
            "unit": "ms",
            "range": "± 4341"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 17990,
            "unit": "ms",
            "range": "± 4920"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 42150,
            "unit": "ms",
            "range": "± 7621"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 25780,
            "unit": "ms",
            "range": "± 4041"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 16090,
            "unit": "ms",
            "range": "± 4418"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 44020,
            "unit": "ms",
            "range": "± 6731"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 17700,
            "unit": "ms",
            "range": "± 3389"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 17820,
            "unit": "ms",
            "range": "± 4464"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 17840,
            "unit": "ms",
            "range": "± 4144"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 19130,
            "unit": "ms",
            "range": "± 4851"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 17660,
            "unit": "ms",
            "range": "± 4434"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 17320,
            "unit": "ms",
            "range": "± 4505"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 226120,
            "unit": "ms",
            "range": "± 28697"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 16930,
            "unit": "ms",
            "range": "± 5727"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 18170,
            "unit": "ms",
            "range": "± 6131"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 17500,
            "unit": "ms",
            "range": "± 6350"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 45600,
            "unit": "ms",
            "range": "± 4923"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 33600,
            "unit": "ms",
            "range": "± 4953"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 60810,
            "unit": "ms",
            "range": "± 6306"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 88360,
            "unit": "ms",
            "range": "± 9010"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 62910,
            "unit": "ms",
            "range": "± 7780"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 25260,
            "unit": "ms",
            "range": "± 4612"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 33710,
            "unit": "ms",
            "range": "± 4598"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 26910,
            "unit": "ms",
            "range": "± 5349"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 40310,
            "unit": "ms",
            "range": "± 4993"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 19950,
            "unit": "ms",
            "range": "± 5282"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 25460,
            "unit": "ms",
            "range": "± 4727"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 18640,
            "unit": "ms",
            "range": "± 5296"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 79880,
            "unit": "ms",
            "range": "± 8727"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 35730,
            "unit": "ms",
            "range": "± 5825"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 21120,
            "unit": "ms",
            "range": "± 3696"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 18150,
            "unit": "ms",
            "range": "± 3940"
          },
          {
            "name": "pallet-gear - tests::upload_program_expected_failure",
            "value": 15880,
            "unit": "ms",
            "range": "± 4765"
          },
          {
            "name": "pallet-gear - tests::upload_program_fails_on_duplicate_id",
            "value": 16650,
            "unit": "ms",
            "range": "± 3766"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 73780,
            "unit": "ms",
            "range": "± 7723"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 13140,
            "unit": "ms",
            "range": "± 3397"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 17980,
            "unit": "ms",
            "range": "± 3243"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 17070,
            "unit": "ms",
            "range": "± 2974"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 17230,
            "unit": "ms",
            "range": "± 3316"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10630,
            "unit": "ms",
            "range": "± 2770"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 12090,
            "unit": "ms",
            "range": "± 2915"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12000,
            "unit": "ms",
            "range": "± 2846"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 12690,
            "unit": "ms",
            "range": "± 3410"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 12730,
            "unit": "ms",
            "range": "± 3486"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 12650,
            "unit": "ms",
            "range": "± 3522"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12190,
            "unit": "ms",
            "range": "± 3151"
          },
          {
            "name": "pallet-gear-gas - tests::lock_works",
            "value": 12730,
            "unit": "ms",
            "range": "± 3212"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 12150,
            "unit": "ms",
            "range": "± 2812"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 11880,
            "unit": "ms",
            "range": "± 2947"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 12000,
            "unit": "ms",
            "range": "± 3104"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11910,
            "unit": "ms",
            "range": "± 3685"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 11540,
            "unit": "ms",
            "range": "± 3623"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 11990,
            "unit": "ms",
            "range": "± 3853"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 12350,
            "unit": "ms",
            "range": "± 3418"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 11360,
            "unit": "ms",
            "range": "± 3348"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 11890,
            "unit": "ms",
            "range": "± 3741"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 12090,
            "unit": "ms",
            "range": "± 3461"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10300,
            "unit": "ms",
            "range": "± 3645"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11460,
            "unit": "ms",
            "range": "± 3204"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 12340,
            "unit": "ms",
            "range": "± 3547"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 12110,
            "unit": "ms",
            "range": "± 3209"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 12270,
            "unit": "ms",
            "range": "± 3698"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10570,
            "unit": "ms",
            "range": "± 3191"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 13520,
            "unit": "ms",
            "range": "± 4644"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 13980,
            "unit": "ms",
            "range": "± 4370"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 13270,
            "unit": "ms",
            "range": "± 4666"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 13080,
            "unit": "ms",
            "range": "± 4314"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 13630,
            "unit": "ms",
            "range": "± 5033"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10910,
            "unit": "ms",
            "range": "± 4429"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 14180,
            "unit": "ms",
            "range": "± 5389"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 22590,
            "unit": "ms",
            "range": "± 3252"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 15260,
            "unit": "ms",
            "range": "± 4824"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 21450,
            "unit": "ms",
            "range": "± 3060"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 28960,
            "unit": "ms",
            "range": "± 3807"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 24190,
            "unit": "ms",
            "range": "± 2711"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 23720,
            "unit": "ms",
            "range": "± 2986"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 25140,
            "unit": "ms",
            "range": "± 3426"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12500,
            "unit": "ms",
            "range": "± 3424"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 13580,
            "unit": "ms",
            "range": "± 2881"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 12790,
            "unit": "ms",
            "range": "± 2684"
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
          "id": "b772eee57fe6ef62fd2317617b8fb243f8561f40",
          "message": "Fix template path",
          "timestamp": "2022-08-22T16:09:17Z",
          "url": "https://github.com/gear-tech/gear/commit/b772eee57fe6ef62fd2317617b8fb243f8561f40"
        },
        "date": 1661191509466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 4063300,
            "unit": "ms",
            "range": "± 9760637"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11100,
            "unit": "ms",
            "range": "± 2711"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 12010,
            "unit": "ms",
            "range": "± 3106"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 25720,
            "unit": "ms",
            "range": "± 4909"
          },
          {
            "name": "pallet-gear - tests::calculate_gas_info_for_wait_dispatch_works",
            "value": 36000,
            "unit": "ms",
            "range": "± 4427"
          },
          {
            "name": "pallet-gear - tests::calculate_init_gas",
            "value": 30560,
            "unit": "ms",
            "range": "± 4402"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 16500,
            "unit": "ms",
            "range": "± 4320"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 101580,
            "unit": "ms",
            "range": "± 10898"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 18640,
            "unit": "ms",
            "range": "± 4186"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 19810,
            "unit": "ms",
            "range": "± 4119"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 42350,
            "unit": "ms",
            "range": "± 6927"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 31110,
            "unit": "ms",
            "range": "± 4653"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 22080,
            "unit": "ms",
            "range": "± 4314"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 20570,
            "unit": "ms",
            "range": "± 3990"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 322920,
            "unit": "ms",
            "range": "± 33730"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 17640,
            "unit": "ms",
            "range": "± 3508"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 24270,
            "unit": "ms",
            "range": "± 4392"
          },
          {
            "name": "pallet-gear - tests::free_storage_hold_on_scheduler_overwhelm",
            "value": 33330,
            "unit": "ms",
            "range": "± 6440"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 18750,
            "unit": "ms",
            "range": "± 4618"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 57650,
            "unit": "ms",
            "range": "± 6594"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 18630,
            "unit": "ms",
            "range": "± 4834"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 40810,
            "unit": "ms",
            "range": "± 5017"
          },
          {
            "name": "pallet-gear - tests::initial_pages_cheaper_than_allocated_pages",
            "value": 150960,
            "unit": "ms",
            "range": "± 10347"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 21000,
            "unit": "ms",
            "range": "± 5988"
          },
          {
            "name": "pallet-gear - tests::locking_gas_for_waitlist",
            "value": 64970,
            "unit": "ms",
            "range": "± 9382"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 26950,
            "unit": "ms",
            "range": "± 4568"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 33570,
            "unit": "ms",
            "range": "± 5308"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 25940,
            "unit": "ms",
            "range": "± 4166"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 42870,
            "unit": "ms",
            "range": "± 5992"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 20110,
            "unit": "ms",
            "range": "± 5742"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 20820,
            "unit": "ms",
            "range": "± 5046"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 20860,
            "unit": "ms",
            "range": "± 5889"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 27300,
            "unit": "ms",
            "range": "± 4531"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 28010,
            "unit": "ms",
            "range": "± 5181"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 18980,
            "unit": "ms",
            "range": "± 4277"
          },
          {
            "name": "pallet-gear - tests::missing_handle_is_not_executed",
            "value": 18140,
            "unit": "ms",
            "range": "± 4478"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 20160,
            "unit": "ms",
            "range": "± 5369"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 27860,
            "unit": "ms",
            "range": "± 4261"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 18760,
            "unit": "ms",
            "range": "± 4089"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 40430,
            "unit": "ms",
            "range": "± 7175"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 26110,
            "unit": "ms",
            "range": "± 4103"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 15900,
            "unit": "ms",
            "range": "± 4557"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 44110,
            "unit": "ms",
            "range": "± 7351"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 17390,
            "unit": "ms",
            "range": "± 3463"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 16700,
            "unit": "ms",
            "range": "± 3758"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 17600,
            "unit": "ms",
            "range": "± 3600"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 18570,
            "unit": "ms",
            "range": "± 3930"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 18360,
            "unit": "ms",
            "range": "± 3876"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 17490,
            "unit": "ms",
            "range": "± 4990"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 220570,
            "unit": "ms",
            "range": "± 28733"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 15790,
            "unit": "ms",
            "range": "± 4550"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 16460,
            "unit": "ms",
            "range": "± 5341"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 16650,
            "unit": "ms",
            "range": "± 5980"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 45930,
            "unit": "ms",
            "range": "± 5219"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 32780,
            "unit": "ms",
            "range": "± 4950"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 59920,
            "unit": "ms",
            "range": "± 6358"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 89300,
            "unit": "ms",
            "range": "± 9872"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 64090,
            "unit": "ms",
            "range": "± 7015"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 24520,
            "unit": "ms",
            "range": "± 3545"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 33670,
            "unit": "ms",
            "range": "± 4911"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 25620,
            "unit": "ms",
            "range": "± 5195"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 40180,
            "unit": "ms",
            "range": "± 5244"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 20480,
            "unit": "ms",
            "range": "± 6717"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 26330,
            "unit": "ms",
            "range": "± 4923"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 19170,
            "unit": "ms",
            "range": "± 6889"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 83310,
            "unit": "ms",
            "range": "± 9124"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 36800,
            "unit": "ms",
            "range": "± 4589"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_zero_gas",
            "value": 26510,
            "unit": "ms",
            "range": "± 4271"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 20840,
            "unit": "ms",
            "range": "± 3815"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 18650,
            "unit": "ms",
            "range": "± 4765"
          },
          {
            "name": "pallet-gear - tests::upload_program_expected_failure",
            "value": 16510,
            "unit": "ms",
            "range": "± 4637"
          },
          {
            "name": "pallet-gear - tests::upload_program_fails_on_duplicate_id",
            "value": 17690,
            "unit": "ms",
            "range": "± 4489"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 74470,
            "unit": "ms",
            "range": "± 6930"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12620,
            "unit": "ms",
            "range": "± 3437"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 18590,
            "unit": "ms",
            "range": "± 3982"
          },
          {
            "name": "pallet-gear-debug - tests::check_gear_stack_end",
            "value": 16670,
            "unit": "ms",
            "range": "± 3720"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 17100,
            "unit": "ms",
            "range": "± 3494"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 17150,
            "unit": "ms",
            "range": "± 3433"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10760,
            "unit": "ms",
            "range": "± 3326"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 13130,
            "unit": "ms",
            "range": "± 3503"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12990,
            "unit": "ms",
            "range": "± 4502"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 13110,
            "unit": "ms",
            "range": "± 3687"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 12320,
            "unit": "ms",
            "range": "± 3931"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 12320,
            "unit": "ms",
            "range": "± 3566"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12380,
            "unit": "ms",
            "range": "± 3270"
          },
          {
            "name": "pallet-gear-gas - tests::lock_works",
            "value": 11950,
            "unit": "ms",
            "range": "± 3299"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 13070,
            "unit": "ms",
            "range": "± 4450"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 12210,
            "unit": "ms",
            "range": "± 3850"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 11950,
            "unit": "ms",
            "range": "± 3816"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11760,
            "unit": "ms",
            "range": "± 3417"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 11820,
            "unit": "ms",
            "range": "± 3433"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 12270,
            "unit": "ms",
            "range": "± 3638"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 12300,
            "unit": "ms",
            "range": "± 3451"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 12280,
            "unit": "ms",
            "range": "± 3690"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 12650,
            "unit": "ms",
            "range": "± 3374"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 12370,
            "unit": "ms",
            "range": "± 3138"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10670,
            "unit": "ms",
            "range": "± 2993"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11590,
            "unit": "ms",
            "range": "± 3532"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 11870,
            "unit": "ms",
            "range": "± 3667"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 11880,
            "unit": "ms",
            "range": "± 3502"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 12040,
            "unit": "ms",
            "range": "± 3423"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10470,
            "unit": "ms",
            "range": "± 3508"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 13690,
            "unit": "ms",
            "range": "± 4048"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 13570,
            "unit": "ms",
            "range": "± 4210"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 12910,
            "unit": "ms",
            "range": "± 4287"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 12890,
            "unit": "ms",
            "range": "± 4270"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 13360,
            "unit": "ms",
            "range": "± 4922"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10600,
            "unit": "ms",
            "range": "± 4064"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 15280,
            "unit": "ms",
            "range": "± 5209"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 21830,
            "unit": "ms",
            "range": "± 3752"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 15600,
            "unit": "ms",
            "range": "± 4584"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 21280,
            "unit": "ms",
            "range": "± 2919"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 27660,
            "unit": "ms",
            "range": "± 3262"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22940,
            "unit": "ms",
            "range": "± 3117"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 23800,
            "unit": "ms",
            "range": "± 2891"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 24020,
            "unit": "ms",
            "range": "± 3352"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12680,
            "unit": "ms",
            "range": "± 3346"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 13650,
            "unit": "ms",
            "range": "± 3493"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 13070,
            "unit": "ms",
            "range": "± 3750"
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
          "id": "fc278731e7d51036f9618c12dee24891dd233f20",
          "message": "Bump spec version",
          "timestamp": "2022-08-29T12:25:36Z",
          "url": "https://github.com/gear-tech/gear/commit/fc278731e7d51036f9618c12dee24891dd233f20"
        },
        "date": 1661895818454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 3955650,
            "unit": "ms",
            "range": "± 8855805"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11600,
            "unit": "ms",
            "range": "± 3178"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 12530,
            "unit": "ms",
            "range": "± 3356"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 24360,
            "unit": "ms",
            "range": "± 3713"
          },
          {
            "name": "pallet-gear - tests::calculate_gas_info_for_wait_dispatch_works",
            "value": 36800,
            "unit": "ms",
            "range": "± 5023"
          },
          {
            "name": "pallet-gear - tests::calculate_init_gas",
            "value": 32100,
            "unit": "ms",
            "range": "± 5133"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 16310,
            "unit": "ms",
            "range": "± 4374"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 101010,
            "unit": "ms",
            "range": "± 12076"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 17880,
            "unit": "ms",
            "range": "± 4637"
          },
          {
            "name": "pallet-gear - tests::check_gr_read_error_works",
            "value": 16530,
            "unit": "ms",
            "range": "± 4689"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 20740,
            "unit": "ms",
            "range": "± 4734"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 41570,
            "unit": "ms",
            "range": "± 5906"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 30480,
            "unit": "ms",
            "range": "± 5164"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 21890,
            "unit": "ms",
            "range": "± 3841"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 20140,
            "unit": "ms",
            "range": "± 4120"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 322530,
            "unit": "ms",
            "range": "± 34545"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 18240,
            "unit": "ms",
            "range": "± 4313"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 24070,
            "unit": "ms",
            "range": "± 4359"
          },
          {
            "name": "pallet-gear - tests::exit_locking_funds",
            "value": 30660,
            "unit": "ms",
            "range": "± 6932"
          },
          {
            "name": "pallet-gear - tests::free_storage_hold_on_scheduler_overwhelm",
            "value": 33100,
            "unit": "ms",
            "range": "± 5527"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 18900,
            "unit": "ms",
            "range": "± 4714"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 57440,
            "unit": "ms",
            "range": "± 6826"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 19940,
            "unit": "ms",
            "range": "± 5952"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 42680,
            "unit": "ms",
            "range": "± 4892"
          },
          {
            "name": "pallet-gear - tests::initial_pages_cheaper_than_allocated_pages",
            "value": 152680,
            "unit": "ms",
            "range": "± 11284"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 20920,
            "unit": "ms",
            "range": "± 5795"
          },
          {
            "name": "pallet-gear - tests::locking_gas_for_waitlist",
            "value": 65170,
            "unit": "ms",
            "range": "± 7661"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 27270,
            "unit": "ms",
            "range": "± 4298"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 34990,
            "unit": "ms",
            "range": "± 5618"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 25760,
            "unit": "ms",
            "range": "± 3352"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 41710,
            "unit": "ms",
            "range": "± 5393"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 19970,
            "unit": "ms",
            "range": "± 4988"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 19930,
            "unit": "ms",
            "range": "± 4643"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 19730,
            "unit": "ms",
            "range": "± 4989"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 27340,
            "unit": "ms",
            "range": "± 4550"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 27290,
            "unit": "ms",
            "range": "± 4617"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 19910,
            "unit": "ms",
            "range": "± 3736"
          },
          {
            "name": "pallet-gear - tests::missing_handle_is_not_executed",
            "value": 18250,
            "unit": "ms",
            "range": "± 4186"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 19420,
            "unit": "ms",
            "range": "± 4569"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 27050,
            "unit": "ms",
            "range": "± 3763"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 18280,
            "unit": "ms",
            "range": "± 4235"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 40350,
            "unit": "ms",
            "range": "± 7400"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 25640,
            "unit": "ms",
            "range": "± 4090"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 16240,
            "unit": "ms",
            "range": "± 4166"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 42490,
            "unit": "ms",
            "range": "± 6824"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 18470,
            "unit": "ms",
            "range": "± 4353"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 17950,
            "unit": "ms",
            "range": "± 3238"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 18370,
            "unit": "ms",
            "range": "± 4435"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 19140,
            "unit": "ms",
            "range": "± 4363"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 18240,
            "unit": "ms",
            "range": "± 4289"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 16860,
            "unit": "ms",
            "range": "± 4671"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 81260,
            "unit": "ms",
            "range": "± 8210"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 218490,
            "unit": "ms",
            "range": "± 25412"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 16350,
            "unit": "ms",
            "range": "± 5179"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 16590,
            "unit": "ms",
            "range": "± 5278"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 17320,
            "unit": "ms",
            "range": "± 6575"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 45980,
            "unit": "ms",
            "range": "± 5825"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 33030,
            "unit": "ms",
            "range": "± 4885"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 60930,
            "unit": "ms",
            "range": "± 6853"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 90150,
            "unit": "ms",
            "range": "± 9605"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 65150,
            "unit": "ms",
            "range": "± 6663"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 25120,
            "unit": "ms",
            "range": "± 5101"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 34180,
            "unit": "ms",
            "range": "± 4412"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 26170,
            "unit": "ms",
            "range": "± 4303"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 40370,
            "unit": "ms",
            "range": "± 5193"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 19650,
            "unit": "ms",
            "range": "± 5713"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 26830,
            "unit": "ms",
            "range": "± 4876"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 18690,
            "unit": "ms",
            "range": "± 5802"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 80680,
            "unit": "ms",
            "range": "± 9498"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 36860,
            "unit": "ms",
            "range": "± 5102"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_zero_gas",
            "value": 26510,
            "unit": "ms",
            "range": "± 4343"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 21030,
            "unit": "ms",
            "range": "± 4198"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 17350,
            "unit": "ms",
            "range": "± 4193"
          },
          {
            "name": "pallet-gear - tests::upload_program_expected_failure",
            "value": 16180,
            "unit": "ms",
            "range": "± 5162"
          },
          {
            "name": "pallet-gear - tests::upload_program_fails_on_duplicate_id",
            "value": 16960,
            "unit": "ms",
            "range": "± 3660"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 74210,
            "unit": "ms",
            "range": "± 7439"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12380,
            "unit": "ms",
            "range": "± 3833"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 17830,
            "unit": "ms",
            "range": "± 3385"
          },
          {
            "name": "pallet-gear-debug - tests::check_gear_stack_end",
            "value": 16400,
            "unit": "ms",
            "range": "± 3728"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 17630,
            "unit": "ms",
            "range": "± 3480"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 18100,
            "unit": "ms",
            "range": "± 3330"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10160,
            "unit": "ms",
            "range": "± 3267"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 12740,
            "unit": "ms",
            "range": "± 3463"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12480,
            "unit": "ms",
            "range": "± 3281"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 13320,
            "unit": "ms",
            "range": "± 3635"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 12670,
            "unit": "ms",
            "range": "± 3641"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 12830,
            "unit": "ms",
            "range": "± 3655"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12330,
            "unit": "ms",
            "range": "± 3262"
          },
          {
            "name": "pallet-gear-gas - tests::lock_works",
            "value": 12670,
            "unit": "ms",
            "range": "± 3741"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 12340,
            "unit": "ms",
            "range": "± 3311"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 11830,
            "unit": "ms",
            "range": "± 3277"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 12180,
            "unit": "ms",
            "range": "± 2944"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 11970,
            "unit": "ms",
            "range": "± 2974"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 11710,
            "unit": "ms",
            "range": "± 2895"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 12160,
            "unit": "ms",
            "range": "± 2873"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 12690,
            "unit": "ms",
            "range": "± 3264"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 11680,
            "unit": "ms",
            "range": "± 3190"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 11720,
            "unit": "ms",
            "range": "± 2642"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 11620,
            "unit": "ms",
            "range": "± 3065"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10210,
            "unit": "ms",
            "range": "± 2804"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 11480,
            "unit": "ms",
            "range": "± 3176"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 11460,
            "unit": "ms",
            "range": "± 3559"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 12060,
            "unit": "ms",
            "range": "± 3602"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 12730,
            "unit": "ms",
            "range": "± 3325"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10180,
            "unit": "ms",
            "range": "± 3332"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 13160,
            "unit": "ms",
            "range": "± 3540"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 13840,
            "unit": "ms",
            "range": "± 4124"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 12780,
            "unit": "ms",
            "range": "± 4515"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 13380,
            "unit": "ms",
            "range": "± 4772"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 13440,
            "unit": "ms",
            "range": "± 4903"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10560,
            "unit": "ms",
            "range": "± 4157"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 14380,
            "unit": "ms",
            "range": "± 4768"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 21800,
            "unit": "ms",
            "range": "± 3400"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 15420,
            "unit": "ms",
            "range": "± 5219"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 21100,
            "unit": "ms",
            "range": "± 3419"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 28070,
            "unit": "ms",
            "range": "± 3625"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22880,
            "unit": "ms",
            "range": "± 2631"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 22850,
            "unit": "ms",
            "range": "± 2850"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 23280,
            "unit": "ms",
            "range": "± 3268"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12860,
            "unit": "ms",
            "range": "± 4017"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 13930,
            "unit": "ms",
            "range": "± 3470"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 12990,
            "unit": "ms",
            "range": "± 3465"
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
          "id": "9109f7157d59d5c63e778fd43a41a7902642957a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\tCargo.lock",
          "timestamp": "2022-08-31T10:42:35Z",
          "url": "https://github.com/gear-tech/gear/commit/9109f7157d59d5c63e778fd43a41a7902642957a"
        },
        "date": 1661950136685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 3949010,
            "unit": "ms",
            "range": "± 8673035"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11200,
            "unit": "ms",
            "range": "± 2877"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 11490,
            "unit": "ms",
            "range": "± 3047"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 25170,
            "unit": "ms",
            "range": "± 5057"
          },
          {
            "name": "pallet-gear - tests::calculate_gas_info_for_wait_dispatch_works",
            "value": 36550,
            "unit": "ms",
            "range": "± 5311"
          },
          {
            "name": "pallet-gear - tests::calculate_init_gas",
            "value": 31000,
            "unit": "ms",
            "range": "± 4436"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 15930,
            "unit": "ms",
            "range": "± 3672"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 100600,
            "unit": "ms",
            "range": "± 10957"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 18220,
            "unit": "ms",
            "range": "± 4566"
          },
          {
            "name": "pallet-gear - tests::check_gr_read_error_works",
            "value": 16370,
            "unit": "ms",
            "range": "± 4369"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 20350,
            "unit": "ms",
            "range": "± 3790"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 41650,
            "unit": "ms",
            "range": "± 6458"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 29820,
            "unit": "ms",
            "range": "± 4744"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 21670,
            "unit": "ms",
            "range": "± 5085"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 20090,
            "unit": "ms",
            "range": "± 4152"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 321850,
            "unit": "ms",
            "range": "± 31928"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 18790,
            "unit": "ms",
            "range": "± 5008"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 24180,
            "unit": "ms",
            "range": "± 3943"
          },
          {
            "name": "pallet-gear - tests::exit_locking_funds",
            "value": 29570,
            "unit": "ms",
            "range": "± 5231"
          },
          {
            "name": "pallet-gear - tests::free_storage_hold_on_scheduler_overwhelm",
            "value": 33070,
            "unit": "ms",
            "range": "± 5809"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 18920,
            "unit": "ms",
            "range": "± 4078"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 57760,
            "unit": "ms",
            "range": "± 6362"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 18400,
            "unit": "ms",
            "range": "± 4543"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 41140,
            "unit": "ms",
            "range": "± 4971"
          },
          {
            "name": "pallet-gear - tests::initial_pages_cheaper_than_allocated_pages",
            "value": 150310,
            "unit": "ms",
            "range": "± 12253"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 20380,
            "unit": "ms",
            "range": "± 5560"
          },
          {
            "name": "pallet-gear - tests::locking_gas_for_waitlist",
            "value": 66800,
            "unit": "ms",
            "range": "± 9099"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 27360,
            "unit": "ms",
            "range": "± 4316"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 33730,
            "unit": "ms",
            "range": "± 3880"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 25900,
            "unit": "ms",
            "range": "± 4250"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 41930,
            "unit": "ms",
            "range": "± 5171"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 19360,
            "unit": "ms",
            "range": "± 4702"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 21100,
            "unit": "ms",
            "range": "± 5616"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 20350,
            "unit": "ms",
            "range": "± 5219"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 27450,
            "unit": "ms",
            "range": "± 4862"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 28020,
            "unit": "ms",
            "range": "± 5549"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 20450,
            "unit": "ms",
            "range": "± 5572"
          },
          {
            "name": "pallet-gear - tests::missing_handle_is_not_executed",
            "value": 17400,
            "unit": "ms",
            "range": "± 4529"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 20400,
            "unit": "ms",
            "range": "± 4171"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 26710,
            "unit": "ms",
            "range": "± 4195"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 17980,
            "unit": "ms",
            "range": "± 3641"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 39330,
            "unit": "ms",
            "range": "± 6676"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 26580,
            "unit": "ms",
            "range": "± 4870"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 16220,
            "unit": "ms",
            "range": "± 4364"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 44490,
            "unit": "ms",
            "range": "± 6976"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 18000,
            "unit": "ms",
            "range": "± 4294"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 17510,
            "unit": "ms",
            "range": "± 3998"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 17730,
            "unit": "ms",
            "range": "± 4289"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 19370,
            "unit": "ms",
            "range": "± 4446"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 18400,
            "unit": "ms",
            "range": "± 3800"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 16560,
            "unit": "ms",
            "range": "± 4479"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 79840,
            "unit": "ms",
            "range": "± 9073"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 226720,
            "unit": "ms",
            "range": "± 25080"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 16010,
            "unit": "ms",
            "range": "± 5048"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 16690,
            "unit": "ms",
            "range": "± 6549"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 18030,
            "unit": "ms",
            "range": "± 7613"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 44880,
            "unit": "ms",
            "range": "± 5904"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 33480,
            "unit": "ms",
            "range": "± 5640"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 60500,
            "unit": "ms",
            "range": "± 6590"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 87300,
            "unit": "ms",
            "range": "± 10167"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 64360,
            "unit": "ms",
            "range": "± 8194"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 25890,
            "unit": "ms",
            "range": "± 5610"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 34440,
            "unit": "ms",
            "range": "± 5417"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 26990,
            "unit": "ms",
            "range": "± 5273"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 40890,
            "unit": "ms",
            "range": "± 5440"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 19750,
            "unit": "ms",
            "range": "± 5691"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 26950,
            "unit": "ms",
            "range": "± 5171"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 20100,
            "unit": "ms",
            "range": "± 6341"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 82230,
            "unit": "ms",
            "range": "± 8937"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 37460,
            "unit": "ms",
            "range": "± 4883"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_zero_gas",
            "value": 25880,
            "unit": "ms",
            "range": "± 4359"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 21420,
            "unit": "ms",
            "range": "± 4569"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 18100,
            "unit": "ms",
            "range": "± 4316"
          },
          {
            "name": "pallet-gear - tests::upload_program_expected_failure",
            "value": 16380,
            "unit": "ms",
            "range": "± 4451"
          },
          {
            "name": "pallet-gear - tests::upload_program_fails_on_duplicate_id",
            "value": 16540,
            "unit": "ms",
            "range": "± 4405"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 73240,
            "unit": "ms",
            "range": "± 8145"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 12050,
            "unit": "ms",
            "range": "± 3902"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 18500,
            "unit": "ms",
            "range": "± 3845"
          },
          {
            "name": "pallet-gear-debug - tests::check_gear_stack_end",
            "value": 15540,
            "unit": "ms",
            "range": "± 3317"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 17420,
            "unit": "ms",
            "range": "± 3209"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 17430,
            "unit": "ms",
            "range": "± 3302"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10780,
            "unit": "ms",
            "range": "± 2937"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 12390,
            "unit": "ms",
            "range": "± 3364"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 12770,
            "unit": "ms",
            "range": "± 3319"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 12370,
            "unit": "ms",
            "range": "± 3442"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 12080,
            "unit": "ms",
            "range": "± 3309"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 12090,
            "unit": "ms",
            "range": "± 3382"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 12580,
            "unit": "ms",
            "range": "± 3547"
          },
          {
            "name": "pallet-gear-gas - tests::lock_works",
            "value": 11830,
            "unit": "ms",
            "range": "± 2690"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 11960,
            "unit": "ms",
            "range": "± 3523"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 12340,
            "unit": "ms",
            "range": "± 3578"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 11760,
            "unit": "ms",
            "range": "± 3295"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 12010,
            "unit": "ms",
            "range": "± 3339"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 12010,
            "unit": "ms",
            "range": "± 3494"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 11290,
            "unit": "ms",
            "range": "± 3166"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 12080,
            "unit": "ms",
            "range": "± 3445"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 11400,
            "unit": "ms",
            "range": "± 3402"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 12350,
            "unit": "ms",
            "range": "± 3444"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 12460,
            "unit": "ms",
            "range": "± 3653"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 10370,
            "unit": "ms",
            "range": "± 3170"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 12540,
            "unit": "ms",
            "range": "± 3545"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 11990,
            "unit": "ms",
            "range": "± 4028"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 11950,
            "unit": "ms",
            "range": "± 3284"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 11630,
            "unit": "ms",
            "range": "± 3463"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 9920,
            "unit": "ms",
            "range": "± 3607"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 12770,
            "unit": "ms",
            "range": "± 3812"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 14000,
            "unit": "ms",
            "range": "± 4368"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 12810,
            "unit": "ms",
            "range": "± 4502"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 14050,
            "unit": "ms",
            "range": "± 5087"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 14020,
            "unit": "ms",
            "range": "± 4993"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 11430,
            "unit": "ms",
            "range": "± 4804"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 14540,
            "unit": "ms",
            "range": "± 4763"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 22110,
            "unit": "ms",
            "range": "± 4173"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 15160,
            "unit": "ms",
            "range": "± 4256"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 20850,
            "unit": "ms",
            "range": "± 3141"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 27730,
            "unit": "ms",
            "range": "± 3662"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 23390,
            "unit": "ms",
            "range": "± 3384"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 23180,
            "unit": "ms",
            "range": "± 3238"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 23880,
            "unit": "ms",
            "range": "± 3259"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 13080,
            "unit": "ms",
            "range": "± 3656"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 13610,
            "unit": "ms",
            "range": "± 3616"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 13190,
            "unit": "ms",
            "range": "± 3786"
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
          "id": "f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47",
          "message": "Add new intrinsics to regression analysis",
          "timestamp": "2022-09-06T09:06:17Z",
          "url": "https://github.com/gear-tech/gear/commit/f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47"
        },
        "date": 1662463434911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 14931,
            "unit": "ms",
            "range": "± 15536"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - schedule::test::instructions_backward_compatibility",
            "value": 7,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::calculate_gas_info_for_wait_dispatch_works",
            "value": 27,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::calculate_init_gas",
            "value": 24,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 11,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 69,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::check_gr_read_error_works",
            "value": 10,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 31,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 24,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 17,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 15,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 241,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 18,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::exit_locking_funds",
            "value": 22,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::free_storage_hold_on_scheduler_overwhelm",
            "value": 23,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 41,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 31,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::initial_pages_cheaper_than_allocated_pages",
            "value": 110,
            "unit": "ms",
            "range": "± 5"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::locking_gas_for_waitlist",
            "value": 28,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 20,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 25,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 30,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 13,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 21,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::missing_handle_is_not_executed",
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 21,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 30,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 21,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 31,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 10,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 59,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 175,
            "unit": "ms",
            "range": "± 5"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 8,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 35,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 26,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 45,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 64,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 47,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 19,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 26,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 20,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 30,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_fail",
            "value": 53,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_success",
            "value": 38,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_mad_big_prog_instrumentation",
            "value": 38,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 19,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 59,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 28,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_zero_gas",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 16,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::upload_program_expected_failure",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::upload_program_fails_on_duplicate_id",
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 58,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-debug - tests::check_gear_stack_end",
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 5,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_blocked",
            "value": 8,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::catch_value_all_catch",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::lock_works",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure_with_subnodes",
            "value": 8,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::test_imbalances_drop",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 6,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 5,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 8,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 5,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 19,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 7,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 18,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 26,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 22,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 23,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-scheduler - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 6,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_outdated_tasks",
            "value": 8,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear-scheduler - tests::gear_handles_tasks",
            "value": 8,
            "unit": "ms",
            "range": "± 0"
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
          "id": "b5ada31418ade851e28596b9880b22c5a216ebe9",
          "message": "Don't fail on alert",
          "timestamp": "2022-08-10T17:11:14Z",
          "url": "https://github.com/gear-tech/gear/commit/b5ada31418ade851e28596b9880b22c5a216ebe9"
        },
        "date": 1660153579287,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 29674,
            "unit": "ms",
            "range": "± 2772"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 33411,
            "unit": "ms",
            "range": "± 2990"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 68217,
            "unit": "ms",
            "range": "± 2412"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 172200,
            "unit": "ms",
            "range": "± 25649"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 80342,
            "unit": "ms",
            "range": "± 9487"
          },
          {
            "name": "Async init - approved pong",
            "value": 15690531,
            "unit": "ms",
            "range": "± 562656"
          },
          {
            "name": "Async-await - async-await",
            "value": 199812,
            "unit": "ms",
            "range": "± 17422"
          },
          {
            "name": "Async-await - mutex",
            "value": 188859,
            "unit": "ms",
            "range": "± 23121"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 179787,
            "unit": "ms",
            "range": "± 26952"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 97916,
            "unit": "ms",
            "range": "± 19809"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8578036,
            "unit": "ms",
            "range": "± 220280"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8689156,
            "unit": "ms",
            "range": "± 197201"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8721478,
            "unit": "ms",
            "range": "± 154109"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8438056,
            "unit": "ms",
            "range": "± 265927"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8532341,
            "unit": "ms",
            "range": "± 124740"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8782737,
            "unit": "ms",
            "range": "± 278424"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8808064,
            "unit": "ms",
            "range": "± 299174"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8520332,
            "unit": "ms",
            "range": "± 241458"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8365313,
            "unit": "ms",
            "range": "± 345999"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4568663,
            "unit": "ms",
            "range": "± 120633"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4957708,
            "unit": "ms",
            "range": "± 198296"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4634031,
            "unit": "ms",
            "range": "± 37962"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4844286,
            "unit": "ms",
            "range": "± 204633"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 506288,
            "unit": "ms",
            "range": "± 32520"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 102209,
            "unit": "ms",
            "range": "± 24531"
          },
          {
            "name": "Chat - chat",
            "value": 117526,
            "unit": "ms",
            "range": "± 53383"
          },
          {
            "name": "Decoder - decoder",
            "value": 51207,
            "unit": "ms",
            "range": "± 30408"
          },
          {
            "name": "Exit code - normal",
            "value": 85249,
            "unit": "ms",
            "range": "± 33440"
          },
          {
            "name": "Exit code - panic",
            "value": 52683,
            "unit": "ms",
            "range": "± 37863"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 236023,
            "unit": "ms",
            "range": "± 20988"
          },
          {
            "name": "Futures-unordered - join",
            "value": 151593,
            "unit": "ms",
            "range": "± 5599"
          },
          {
            "name": "Futures-unordered - select",
            "value": 149687,
            "unit": "ms",
            "range": "± 12922"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 185221,
            "unit": "ms",
            "range": "± 12008"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 83247,
            "unit": "ms",
            "range": "± 21968"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 57470,
            "unit": "ms",
            "range": "± 9452"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14634138,
            "unit": "ms",
            "range": "± 494045"
          },
          {
            "name": "Multiping - multiping",
            "value": 68466,
            "unit": "ms",
            "range": "± 10958"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 37550,
            "unit": "ms",
            "range": "± 18627"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 42213,
            "unit": "ms",
            "range": "± 30670"
          },
          {
            "name": "Program generator - program_generator",
            "value": 46619,
            "unit": "ms",
            "range": "± 7328"
          },
          {
            "name": "Program_id test - program_id",
            "value": 24828,
            "unit": "ms",
            "range": "± 17308"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 42638,
            "unit": "ms",
            "range": "± 18355"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 19822,
            "unit": "ms",
            "range": "± 706"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 69095,
            "unit": "ms",
            "range": "± 19454"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 80027,
            "unit": "ms",
            "range": "± 39864"
          },
          {
            "name": "Total time",
            "value": 149278575,
            "unit": "ms",
            "range": "± 3919617"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 12318,
            "unit": "ms",
            "range": "± 4075"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 143059,
            "unit": "ms",
            "range": "± 18685"
          },
          {
            "name": "Wait test - wait",
            "value": 30233,
            "unit": "ms",
            "range": "± 5793"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 90214,
            "unit": "ms",
            "range": "± 15437"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 74996,
            "unit": "ms",
            "range": "± 18307"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8361342,
            "unit": "ms",
            "range": "± 288803"
          },
          {
            "name": "gui test - gui",
            "value": 10541640,
            "unit": "ms",
            "range": "± 253166"
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
          "id": "957e60d81fc9df3d69bbf1dc0eb01e1a153dc638",
          "message": "Set COUNT to 100",
          "timestamp": "2022-08-11T11:47:41Z",
          "url": "https://github.com/gear-tech/gear/commit/957e60d81fc9df3d69bbf1dc0eb01e1a153dc638"
        },
        "date": 1660225575570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 30727,
            "unit": "ms",
            "range": "± 12416"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 44086,
            "unit": "ms",
            "range": "± 19249"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 76464,
            "unit": "ms",
            "range": "± 27014"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 154434,
            "unit": "ms",
            "range": "± 25466"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 94262,
            "unit": "ms",
            "range": "± 28548"
          },
          {
            "name": "Async init - approved pong",
            "value": 15292315,
            "unit": "ms",
            "range": "± 183266"
          },
          {
            "name": "Async-await - async-await",
            "value": 182276,
            "unit": "ms",
            "range": "± 21691"
          },
          {
            "name": "Async-await - mutex",
            "value": 172359,
            "unit": "ms",
            "range": "± 24396"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 162560,
            "unit": "ms",
            "range": "± 31600"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 84347,
            "unit": "ms",
            "range": "± 27146"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8413829,
            "unit": "ms",
            "range": "± 167303"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8444607,
            "unit": "ms",
            "range": "± 156927"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8404070,
            "unit": "ms",
            "range": "± 183787"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8311165,
            "unit": "ms",
            "range": "± 176790"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8230461,
            "unit": "ms",
            "range": "± 193914"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8382105,
            "unit": "ms",
            "range": "± 157311"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8478798,
            "unit": "ms",
            "range": "± 150982"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8346890,
            "unit": "ms",
            "range": "± 169040"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8365564,
            "unit": "ms",
            "range": "± 188503"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4475555,
            "unit": "ms",
            "range": "± 201819"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4572125,
            "unit": "ms",
            "range": "± 181171"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4470766,
            "unit": "ms",
            "range": "± 184947"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4548588,
            "unit": "ms",
            "range": "± 181455"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 464401,
            "unit": "ms",
            "range": "± 36927"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 65880,
            "unit": "ms",
            "range": "± 20630"
          },
          {
            "name": "Chat - chat",
            "value": 111725,
            "unit": "ms",
            "range": "± 28875"
          },
          {
            "name": "Decoder - decoder",
            "value": 33089,
            "unit": "ms",
            "range": "± 19772"
          },
          {
            "name": "Exit code - normal",
            "value": 52898,
            "unit": "ms",
            "range": "± 19962"
          },
          {
            "name": "Exit code - panic",
            "value": 31992,
            "unit": "ms",
            "range": "± 19944"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 201269,
            "unit": "ms",
            "range": "± 34056"
          },
          {
            "name": "Futures-unordered - join",
            "value": 155909,
            "unit": "ms",
            "range": "± 32243"
          },
          {
            "name": "Futures-unordered - select",
            "value": 161125,
            "unit": "ms",
            "range": "± 32697"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 152740,
            "unit": "ms",
            "range": "± 33639"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 60173,
            "unit": "ms",
            "range": "± 20254"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 47584,
            "unit": "ms",
            "range": "± 22413"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14404332,
            "unit": "ms",
            "range": "± 200686"
          },
          {
            "name": "Multiping - multiping",
            "value": 41739,
            "unit": "ms",
            "range": "± 19427"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 29191,
            "unit": "ms",
            "range": "± 19733"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 32257,
            "unit": "ms",
            "range": "± 17133"
          },
          {
            "name": "Program generator - program_generator",
            "value": 40248,
            "unit": "ms",
            "range": "± 18347"
          },
          {
            "name": "Program_id test - program_id",
            "value": 30436,
            "unit": "ms",
            "range": "± 18293"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 36513,
            "unit": "ms",
            "range": "± 22051"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 30952,
            "unit": "ms",
            "range": "± 18500"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 45211,
            "unit": "ms",
            "range": "± 17519"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 43052,
            "unit": "ms",
            "range": "± 19514"
          },
          {
            "name": "Total time",
            "value": 144860581,
            "unit": "ms",
            "range": "± 1106398"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 17045,
            "unit": "ms",
            "range": "± 15851"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 151450,
            "unit": "ms",
            "range": "± 37689"
          },
          {
            "name": "Wait test - wait",
            "value": 38126,
            "unit": "ms",
            "range": "± 18795"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 68715,
            "unit": "ms",
            "range": "± 29129"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 63111,
            "unit": "ms",
            "range": "± 17057"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8158131,
            "unit": "ms",
            "range": "± 198450"
          },
          {
            "name": "gui test - gui",
            "value": 10352909,
            "unit": "ms",
            "range": "± 169668"
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
          "id": "b772eee57fe6ef62fd2317617b8fb243f8561f40",
          "message": "Fix template path",
          "timestamp": "2022-08-22T16:09:17Z",
          "url": "https://github.com/gear-tech/gear/commit/b772eee57fe6ef62fd2317617b8fb243f8561f40"
        },
        "date": 1661191516258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 28527,
            "unit": "ms",
            "range": "± 11372"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 39692,
            "unit": "ms",
            "range": "± 13351"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 71037,
            "unit": "ms",
            "range": "± 21252"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 150606,
            "unit": "ms",
            "range": "± 29566"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 87600,
            "unit": "ms",
            "range": "± 26000"
          },
          {
            "name": "Async init - approved pong",
            "value": 15381439,
            "unit": "ms",
            "range": "± 186031"
          },
          {
            "name": "Async-await - async-await",
            "value": 176488,
            "unit": "ms",
            "range": "± 21171"
          },
          {
            "name": "Async-await - mutex",
            "value": 169058,
            "unit": "ms",
            "range": "± 26442"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 160710,
            "unit": "ms",
            "range": "± 30072"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 79920,
            "unit": "ms",
            "range": "± 24573"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8415245,
            "unit": "ms",
            "range": "± 160122"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8436827,
            "unit": "ms",
            "range": "± 150071"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8430232,
            "unit": "ms",
            "range": "± 182634"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8378175,
            "unit": "ms",
            "range": "± 182789"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8292721,
            "unit": "ms",
            "range": "± 181038"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8391890,
            "unit": "ms",
            "range": "± 197922"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8514342,
            "unit": "ms",
            "range": "± 144832"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8411860,
            "unit": "ms",
            "range": "± 197028"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8379483,
            "unit": "ms",
            "range": "± 160867"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4496630,
            "unit": "ms",
            "range": "± 196506"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4609445,
            "unit": "ms",
            "range": "± 165732"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4462965,
            "unit": "ms",
            "range": "± 201697"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4629415,
            "unit": "ms",
            "range": "± 212570"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 446568,
            "unit": "ms",
            "range": "± 41638"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 63889,
            "unit": "ms",
            "range": "± 20605"
          },
          {
            "name": "Chat - chat",
            "value": 102169,
            "unit": "ms",
            "range": "± 28584"
          },
          {
            "name": "Decoder - decoder",
            "value": 35274,
            "unit": "ms",
            "range": "± 18760"
          },
          {
            "name": "Exit code - normal",
            "value": 55104,
            "unit": "ms",
            "range": "± 19055"
          },
          {
            "name": "Exit code - panic",
            "value": 33706,
            "unit": "ms",
            "range": "± 20978"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 196684,
            "unit": "ms",
            "range": "± 31435"
          },
          {
            "name": "Futures-unordered - join",
            "value": 155603,
            "unit": "ms",
            "range": "± 36715"
          },
          {
            "name": "Futures-unordered - select",
            "value": 161893,
            "unit": "ms",
            "range": "± 36156"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 152468,
            "unit": "ms",
            "range": "± 33575"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 56786,
            "unit": "ms",
            "range": "± 16994"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 49402,
            "unit": "ms",
            "range": "± 27169"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14505448,
            "unit": "ms",
            "range": "± 200672"
          },
          {
            "name": "Multiping - multiping",
            "value": 37783,
            "unit": "ms",
            "range": "± 19107"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 23018,
            "unit": "ms",
            "range": "± 17731"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 30376,
            "unit": "ms",
            "range": "± 15800"
          },
          {
            "name": "Program generator - program_generator",
            "value": 43774,
            "unit": "ms",
            "range": "± 18647"
          },
          {
            "name": "Program_id test - program_id",
            "value": 30033,
            "unit": "ms",
            "range": "± 18367"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 35971,
            "unit": "ms",
            "range": "± 21597"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 28420,
            "unit": "ms",
            "range": "± 15157"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 44872,
            "unit": "ms",
            "range": "± 16453"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 46959,
            "unit": "ms",
            "range": "± 22492"
          },
          {
            "name": "Total time",
            "value": 145435465,
            "unit": "ms",
            "range": "± 1019685"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 14378,
            "unit": "ms",
            "range": "± 12914"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 149009,
            "unit": "ms",
            "range": "± 32440"
          },
          {
            "name": "Wait test - wait",
            "value": 34383,
            "unit": "ms",
            "range": "± 14486"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 67080,
            "unit": "ms",
            "range": "± 22605"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 59920,
            "unit": "ms",
            "range": "± 16192"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8185693,
            "unit": "ms",
            "range": "± 205960"
          },
          {
            "name": "gui test - gui",
            "value": 10394468,
            "unit": "ms",
            "range": "± 163569"
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
          "id": "fc278731e7d51036f9618c12dee24891dd233f20",
          "message": "Bump spec version",
          "timestamp": "2022-08-29T12:25:36Z",
          "url": "https://github.com/gear-tech/gear/commit/fc278731e7d51036f9618c12dee24891dd233f20"
        },
        "date": 1661895825347,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 29235,
            "unit": "ms",
            "range": "± 14397"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 41153,
            "unit": "ms",
            "range": "± 16166"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 72651,
            "unit": "ms",
            "range": "± 22500"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 145406,
            "unit": "ms",
            "range": "± 26417"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 88095,
            "unit": "ms",
            "range": "± 26502"
          },
          {
            "name": "Async init - approved pong",
            "value": 15294440,
            "unit": "ms",
            "range": "± 155876"
          },
          {
            "name": "Async-await - async-await",
            "value": 171884,
            "unit": "ms",
            "range": "± 18983"
          },
          {
            "name": "Async-await - mutex",
            "value": 162501,
            "unit": "ms",
            "range": "± 22830"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 155503,
            "unit": "ms",
            "range": "± 30331"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 80185,
            "unit": "ms",
            "range": "± 23400"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8370192,
            "unit": "ms",
            "range": "± 159332"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8437413,
            "unit": "ms",
            "range": "± 163431"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8403769,
            "unit": "ms",
            "range": "± 162477"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8315549,
            "unit": "ms",
            "range": "± 169264"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8247422,
            "unit": "ms",
            "range": "± 155947"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8326469,
            "unit": "ms",
            "range": "± 168287"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8447732,
            "unit": "ms",
            "range": "± 134965"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8342691,
            "unit": "ms",
            "range": "± 166998"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8341606,
            "unit": "ms",
            "range": "± 190592"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4491296,
            "unit": "ms",
            "range": "± 189414"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4579745,
            "unit": "ms",
            "range": "± 181943"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4477485,
            "unit": "ms",
            "range": "± 205070"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4561256,
            "unit": "ms",
            "range": "± 193763"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 444096,
            "unit": "ms",
            "range": "± 35062"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 63277,
            "unit": "ms",
            "range": "± 17937"
          },
          {
            "name": "Chat - chat",
            "value": 101410,
            "unit": "ms",
            "range": "± 24170"
          },
          {
            "name": "Decoder - decoder",
            "value": 34247,
            "unit": "ms",
            "range": "± 19233"
          },
          {
            "name": "Exit code - normal",
            "value": 52942,
            "unit": "ms",
            "range": "± 17863"
          },
          {
            "name": "Exit code - panic",
            "value": 35357,
            "unit": "ms",
            "range": "± 21557"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 193717,
            "unit": "ms",
            "range": "± 26796"
          },
          {
            "name": "Futures-unordered - join",
            "value": 146018,
            "unit": "ms",
            "range": "± 31428"
          },
          {
            "name": "Futures-unordered - select",
            "value": 155703,
            "unit": "ms",
            "range": "± 38142"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 147362,
            "unit": "ms",
            "range": "± 32457"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 56183,
            "unit": "ms",
            "range": "± 14946"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 50810,
            "unit": "ms",
            "range": "± 24846"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14379156,
            "unit": "ms",
            "range": "± 182105"
          },
          {
            "name": "Multiping - multiping",
            "value": 40479,
            "unit": "ms",
            "range": "± 19412"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 27877,
            "unit": "ms",
            "range": "± 18744"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 32698,
            "unit": "ms",
            "range": "± 19078"
          },
          {
            "name": "Program generator - program_generator",
            "value": 44893,
            "unit": "ms",
            "range": "± 17827"
          },
          {
            "name": "Program_id test - program_id",
            "value": 29586,
            "unit": "ms",
            "range": "± 18916"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 34720,
            "unit": "ms",
            "range": "± 20725"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 26922,
            "unit": "ms",
            "range": "± 14277"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 48375,
            "unit": "ms",
            "range": "± 17698"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 44788,
            "unit": "ms",
            "range": "± 21099"
          },
          {
            "name": "Total time",
            "value": 144589003,
            "unit": "ms",
            "range": "± 821184"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 16450,
            "unit": "ms",
            "range": "± 15241"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 147225,
            "unit": "ms",
            "range": "± 32908"
          },
          {
            "name": "Wait test - wait",
            "value": 35122,
            "unit": "ms",
            "range": "± 19491"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 66870,
            "unit": "ms",
            "range": "± 24120"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 58734,
            "unit": "ms",
            "range": "± 15311"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8143323,
            "unit": "ms",
            "range": "± 182812"
          },
          {
            "name": "gui test - gui",
            "value": 10346961,
            "unit": "ms",
            "range": "± 166583"
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
          "id": "9109f7157d59d5c63e778fd43a41a7902642957a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\tCargo.lock",
          "timestamp": "2022-08-31T10:42:35Z",
          "url": "https://github.com/gear-tech/gear/commit/9109f7157d59d5c63e778fd43a41a7902642957a"
        },
        "date": 1661950143322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 26956,
            "unit": "ms",
            "range": "± 7645"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 37772,
            "unit": "ms",
            "range": "± 10993"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 67489,
            "unit": "ms",
            "range": "± 18941"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 147364,
            "unit": "ms",
            "range": "± 21126"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 82539,
            "unit": "ms",
            "range": "± 20076"
          },
          {
            "name": "Async init - approved pong",
            "value": 15372316,
            "unit": "ms",
            "range": "± 184637"
          },
          {
            "name": "Async-await - async-await",
            "value": 169383,
            "unit": "ms",
            "range": "± 17884"
          },
          {
            "name": "Async-await - mutex",
            "value": 164256,
            "unit": "ms",
            "range": "± 23795"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 162085,
            "unit": "ms",
            "range": "± 29122"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 79694,
            "unit": "ms",
            "range": "± 21468"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8415989,
            "unit": "ms",
            "range": "± 158438"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8426181,
            "unit": "ms",
            "range": "± 167728"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8407614,
            "unit": "ms",
            "range": "± 187914"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8320582,
            "unit": "ms",
            "range": "± 189422"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8275359,
            "unit": "ms",
            "range": "± 177975"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8368459,
            "unit": "ms",
            "range": "± 170943"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8469022,
            "unit": "ms",
            "range": "± 159480"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8363015,
            "unit": "ms",
            "range": "± 195377"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8349581,
            "unit": "ms",
            "range": "± 156894"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4509483,
            "unit": "ms",
            "range": "± 181471"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4580046,
            "unit": "ms",
            "range": "± 183103"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4491650,
            "unit": "ms",
            "range": "± 173928"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4599135,
            "unit": "ms",
            "range": "± 190140"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 439945,
            "unit": "ms",
            "range": "± 32949"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 62408,
            "unit": "ms",
            "range": "± 20236"
          },
          {
            "name": "Chat - chat",
            "value": 106431,
            "unit": "ms",
            "range": "± 25824"
          },
          {
            "name": "Decoder - decoder",
            "value": 35907,
            "unit": "ms",
            "range": "± 19711"
          },
          {
            "name": "Exit code - normal",
            "value": 51828,
            "unit": "ms",
            "range": "± 19496"
          },
          {
            "name": "Exit code - panic",
            "value": 36830,
            "unit": "ms",
            "range": "± 21835"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 191754,
            "unit": "ms",
            "range": "± 32671"
          },
          {
            "name": "Futures-unordered - join",
            "value": 149112,
            "unit": "ms",
            "range": "± 30261"
          },
          {
            "name": "Futures-unordered - select",
            "value": 153797,
            "unit": "ms",
            "range": "± 32265"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 154662,
            "unit": "ms",
            "range": "± 32892"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 53462,
            "unit": "ms",
            "range": "± 15204"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 49387,
            "unit": "ms",
            "range": "± 24620"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14424409,
            "unit": "ms",
            "range": "± 204098"
          },
          {
            "name": "Multiping - multiping",
            "value": 39309,
            "unit": "ms",
            "range": "± 19641"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 22864,
            "unit": "ms",
            "range": "± 16003"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 30079,
            "unit": "ms",
            "range": "± 16917"
          },
          {
            "name": "Program generator - program_generator",
            "value": 41494,
            "unit": "ms",
            "range": "± 18211"
          },
          {
            "name": "Program_id test - program_id",
            "value": 31318,
            "unit": "ms",
            "range": "± 18455"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 33491,
            "unit": "ms",
            "range": "± 17854"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 24925,
            "unit": "ms",
            "range": "± 10615"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 44028,
            "unit": "ms",
            "range": "± 16459"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 50167,
            "unit": "ms",
            "range": "± 22526"
          },
          {
            "name": "Total time",
            "value": 144970273,
            "unit": "ms",
            "range": "± 878089"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 13742,
            "unit": "ms",
            "range": "± 12026"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 144218,
            "unit": "ms",
            "range": "± 29525"
          },
          {
            "name": "Wait test - wait",
            "value": 35962,
            "unit": "ms",
            "range": "± 17401"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 69316,
            "unit": "ms",
            "range": "± 20372"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 60939,
            "unit": "ms",
            "range": "± 15279"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8157269,
            "unit": "ms",
            "range": "± 167515"
          },
          {
            "name": "gui test - gui",
            "value": 10375220,
            "unit": "ms",
            "range": "± 162914"
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
          "id": "f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47",
          "message": "Add new intrinsics to regression analysis",
          "timestamp": "2022-09-06T09:06:17Z",
          "url": "https://github.com/gear-tech/gear/commit/f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47"
        },
        "date": 1662463441526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 27,
            "unit": "ms",
            "range": "± 11"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 39,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 73,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 141,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 86,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Async init - approved pong",
            "value": 15355,
            "unit": "ms",
            "range": "± 183"
          },
          {
            "name": "Async-await - async-await",
            "value": 170,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Async-await - mutex",
            "value": 168,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 160,
            "unit": "ms",
            "range": "± 30"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 77,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8447,
            "unit": "ms",
            "range": "± 159"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8437,
            "unit": "ms",
            "range": "± 168"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8424,
            "unit": "ms",
            "range": "± 198"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8352,
            "unit": "ms",
            "range": "± 176"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8286,
            "unit": "ms",
            "range": "± 196"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8369,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8485,
            "unit": "ms",
            "range": "± 174"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8387,
            "unit": "ms",
            "range": "± 179"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8395,
            "unit": "ms",
            "range": "± 187"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4506,
            "unit": "ms",
            "range": "± 175"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4566,
            "unit": "ms",
            "range": "± 217"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4490,
            "unit": "ms",
            "range": "± 178"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4602,
            "unit": "ms",
            "range": "± 196"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 441,
            "unit": "ms",
            "range": "± 41"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 62,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Chat - chat",
            "value": 104,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Decoder - decoder",
            "value": 30,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Exit code - normal",
            "value": 51,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Exit code - panic",
            "value": 33,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 193,
            "unit": "ms",
            "range": "± 38"
          },
          {
            "name": "Futures-unordered - join",
            "value": 149,
            "unit": "ms",
            "range": "± 38"
          },
          {
            "name": "Futures-unordered - select",
            "value": 153,
            "unit": "ms",
            "range": "± 39"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 155,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 55,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 44,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14449,
            "unit": "ms",
            "range": "± 184"
          },
          {
            "name": "Multiping - multiping",
            "value": 38,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 24,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 27,
            "unit": "ms",
            "range": "± 12"
          },
          {
            "name": "Program generator - program_generator",
            "value": 44,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Program_id test - program_id",
            "value": 24,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 34,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 27,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 42,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 42,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Total time",
            "value": 145152,
            "unit": "ms",
            "range": "± 954"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 15,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 146,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Wait test - wait",
            "value": 34,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 67,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 59,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8159,
            "unit": "ms",
            "range": "± 195"
          },
          {
            "name": "gui test - gui",
            "value": 10382,
            "unit": "ms",
            "range": "± 184"
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
          "id": "b5ada31418ade851e28596b9880b22c5a216ebe9",
          "message": "Don't fail on alert",
          "timestamp": "2022-08-10T17:11:14Z",
          "url": "https://github.com/gear-tech/gear/commit/b5ada31418ade851e28596b9880b22c5a216ebe9"
        },
        "date": 1660153585367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 5835,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 2832,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 3524,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 3594,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 3635,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 5015,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 4849,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 5026,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 3225,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 4600,
            "unit": "ns"
          },
          {
            "name": "gr_read_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 3089,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 2838,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 4056,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 6921,
            "unit": "ns"
          },
          {
            "name": "gr_send_push_per_byte",
            "value": 6,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 3114,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit_per_byte",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 3739,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 3880,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push_per_byte",
            "value": 5,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 3899,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 3495,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 2965,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 301584,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 224765,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 224014,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 4810,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 383438,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas_per_byte",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 3616,
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
          "id": "957e60d81fc9df3d69bbf1dc0eb01e1a153dc638",
          "message": "Set COUNT to 100",
          "timestamp": "2022-08-11T11:47:41Z",
          "url": "https://github.com/gear-tech/gear/commit/957e60d81fc9df3d69bbf1dc0eb01e1a153dc638"
        },
        "date": 1660225581692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 5042,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 3065,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 3832,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 3654,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 3724,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 3682,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 3996,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 4071,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 2452,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 3155,
            "unit": "ns"
          },
          {
            "name": "gr_read_per_byte",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 2573,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 3489,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 3691,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 5670,
            "unit": "ns"
          },
          {
            "name": "gr_send_push_per_byte",
            "value": 6,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 3127,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit_per_byte",
            "value": 267,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 4212,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit_per_byte",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 4210,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push_per_byte",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 4042,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 3081,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 2429,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 262551,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 193342,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 195370,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 4523,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 483237,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas_per_byte",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 3217,
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
          "id": "b772eee57fe6ef62fd2317617b8fb243f8561f40",
          "message": "Fix template path",
          "timestamp": "2022-08-22T16:09:17Z",
          "url": "https://github.com/gear-tech/gear/commit/b772eee57fe6ef62fd2317617b8fb243f8561f40"
        },
        "date": 1661191522954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 408696000,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 112661000,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 140194000,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 142861000,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 132378000,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 131657000,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 141858000,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 173358000,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 95232000,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 135947000,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 102378000,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 118661000,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 167401000,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 318892000,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 88855000,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 167018000,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 142321000,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 138566000,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 142747000,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 93458000,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 27479000,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 11177000,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 28147000,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 213605000,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 103257000,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 108203000,
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
          "id": "fc278731e7d51036f9618c12dee24891dd233f20",
          "message": "Bump spec version",
          "timestamp": "2022-08-29T12:25:36Z",
          "url": "https://github.com/gear-tech/gear/commit/fc278731e7d51036f9618c12dee24891dd233f20"
        },
        "date": 1661895832212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 382123000,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 106528000,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 128560000,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 136234000,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 131299000,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 134335000,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 136263000,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 142504000,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 88500000,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 133923000,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 94237000,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 110999000,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 147737000,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 308172000,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 80790000,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 162284000,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 151820000,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 144527000,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 140836000,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 89773000,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 80445000,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 14751000,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 35346000,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 200983000,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 185132000,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 117611000,
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
          "id": "9109f7157d59d5c63e778fd43a41a7902642957a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\tCargo.lock",
          "timestamp": "2022-08-31T10:42:35Z",
          "url": "https://github.com/gear-tech/gear/commit/9109f7157d59d5c63e778fd43a41a7902642957a"
        },
        "date": 1661950149729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 448449,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 123192,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 145045,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 140786,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 157424,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 151036,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 157340,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 171959,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 109010,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 141518,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 122054,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 120853,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 173939,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 339397,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 96567,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 181321,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 162500,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 146358,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 153769,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 104417,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 47472,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 51953,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 32840,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 235025,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 127454,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 121925,
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
          "id": "f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47",
          "message": "Add new intrinsics to regression analysis",
          "timestamp": "2022-09-06T09:06:17Z",
          "url": "https://github.com/gear-tech/gear/commit/f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47"
        },
        "date": 1662463447980,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 358658,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 116579,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 132802,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 128380,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 125214,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 137301,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 146824,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 145691,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 94885,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 136189,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 93979,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 112831,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 155738,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 298709,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 83954,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 168453,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 141619,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 135640,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 150658,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 97002,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 47784,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 28617,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 35496,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 66209,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 60920,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 212341,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 81325,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 109807,
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
          "id": "b5ada31418ade851e28596b9880b22c5a216ebe9",
          "message": "Don't fail on alert",
          "timestamp": "2022-08-10T17:11:14Z",
          "url": "https://github.com/gear-tech/gear/commit/b5ada31418ade851e28596b9880b22c5a216ebe9"
        },
        "date": 1660153591726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 481,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 692,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 95,
            "unit": "ns"
          },
          {
            "name": "r#if",
            "value": 112,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 119,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 102,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 96,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 108,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 131,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 180,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 120,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 94,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 96,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 103,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 275,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 270,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 174,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 104,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 132,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 106,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 107,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 91,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 90,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 91,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 117,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 102,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 97,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 109,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 113,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 119,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 96,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 95,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 94,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 100,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 102,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 91,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 112,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 100,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 138,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 99,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 109,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 92,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 90,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 100,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 102,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 103,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 95,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 88,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 96,
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
          "id": "b5ada31418ade851e28596b9880b22c5a216ebe9",
          "message": "Don't fail on alert",
          "timestamp": "2022-08-10T17:11:14Z",
          "url": "https://github.com/gear-tech/gear/commit/b5ada31418ade851e28596b9880b22c5a216ebe9"
        },
        "date": 1660153597709,
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
          "id": "957e60d81fc9df3d69bbf1dc0eb01e1a153dc638",
          "message": "Set COUNT to 100",
          "timestamp": "2022-08-11T11:47:41Z",
          "url": "https://github.com/gear-tech/gear/commit/957e60d81fc9df3d69bbf1dc0eb01e1a153dc638"
        },
        "date": 1660225587825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 41,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 379,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 710,
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
            "value": 11,
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
            "value": 103,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 83,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 77,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 47,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 46,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 224,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 234,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 132,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 50,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 28,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 1,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 1,
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
            "value": 10,
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
          "id": "957e60d81fc9df3d69bbf1dc0eb01e1a153dc638",
          "message": "Set COUNT to 100",
          "timestamp": "2022-08-11T11:47:41Z",
          "url": "https://github.com/gear-tech/gear/commit/957e60d81fc9df3d69bbf1dc0eb01e1a153dc638"
        },
        "date": 1660225593827,
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
          "id": "fc278731e7d51036f9618c12dee24891dd233f20",
          "message": "Bump spec version",
          "timestamp": "2022-08-29T12:25:36Z",
          "url": "https://github.com/gear-tech/gear/commit/fc278731e7d51036f9618c12dee24891dd233f20"
        },
        "date": 1661895838744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 389000,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 591000,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 702000,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 414000,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 556000,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1719000,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 22000,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 656000,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1879000,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 180000,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 85000,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 117000,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 129000,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 193000,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 241000,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 1708000,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 660000,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 618000,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 122000,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 236000,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 44000,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 24000,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 13000,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 198000,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 224000,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 221000,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 268000,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 249000,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 262000,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 246000,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 261000,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 206000,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 246000,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 165000,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 163000,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 254000,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 1048000,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 933000,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1973000,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 848000,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 135000,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 196000,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 165000,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 169000,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 147000,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 173000,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 174000,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 172000,
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
          "id": "9109f7157d59d5c63e778fd43a41a7902642957a",
          "message": "Merge remote-tracking branch 'origin/master' into al-regular-perf-check\n\n# Conflicts:\n#\tCargo.lock",
          "timestamp": "2022-08-31T10:42:35Z",
          "url": "https://github.com/gear-tech/gear/commit/9109f7157d59d5c63e778fd43a41a7902642957a"
        },
        "date": 1661950156439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 1,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 507,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 655,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 713,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 419,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 549,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1835,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 14,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 710,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1900,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 151,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 65,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 130,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 130,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 63,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 122,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 2308,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 702,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 632,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 70,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 272,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 24,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 65,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 38,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 206,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 194,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 206,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 210,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 228,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 229,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 240,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 239,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 229,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 221,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 186,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 152,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 219,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 974,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 904,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 2143,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 906,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 173,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 171,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 175,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 159,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 175,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 127,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 152,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 158,
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