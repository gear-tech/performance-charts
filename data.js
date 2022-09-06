window.BENCHMARK_DATA = {
  "lastUpdate": 1662482854014,
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
          "id": "afb9aae5977477782c2cc07678cd4f88f6fb91f7",
          "message": "Generate extrinsics weights file",
          "timestamp": "2022-09-06T14:31:34Z",
          "url": "https://github.com/gear-tech/gear/commit/afb9aae5977477782c2cc07678cd4f88f6fb91f7"
        },
        "date": 1662482852275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 14978,
            "unit": "ms",
            "range": "± 15411"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 69,
            "unit": "ms",
            "range": "± 4"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::claim_value_works",
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 30,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 23,
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
            "value": 240,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 12,
            "unit": "ms",
            "range": "± 0"
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::free_storage_hold_on_scheduler_overwhelm",
            "value": 23,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::initial_pages_cheaper_than_allocated_pages",
            "value": 110,
            "unit": "ms",
            "range": "± 6"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_claimed",
            "value": 20,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 24,
            "unit": "ms",
            "range": "± 1"
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
            "range": "± 1"
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 20,
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
            "range": "± 1"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 30,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 20,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "range": "± 1"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 59,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 175,
            "unit": "ms",
            "range": "± 4"
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
            "range": "± 0"
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
            "value": 27,
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 25,
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_success",
            "value": 39,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_mad_big_prog_instrumentation",
            "value": 38,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 11,
            "unit": "ms",
            "range": "± 1"
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
            "range": "± 2"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 58,
            "unit": "ms",
            "range": "± 2"
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
            "value": 7,
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
            "value": 5,
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
            "value": 19,
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 22,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 22,
            "unit": "ms",
            "range": "± 2"
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
          "id": "f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47",
          "message": "Add new intrinsics to regression analysis",
          "timestamp": "2022-09-06T09:06:17Z",
          "url": "https://github.com/gear-tech/gear/commit/f24c48c4fcb0b41ba3322cbbee5a7fbe9970ba47"
        },
        "date": 1662463454424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 10,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 375,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 519,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 700,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 423,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 593,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1687,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 27,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 974,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1880,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 170,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 70,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 125,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 102,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 31,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 80,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 2729,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 568,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 616,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 146,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 253,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 68,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 79,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 171,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 282,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 243,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 264,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 245,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 224,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 198,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 244,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 249,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 246,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 152,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 196,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 212,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 1009,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 815,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1987,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 932,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 170,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 163,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 199,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 137,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 183,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 134,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 159,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 125,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}