window.BENCHMARK_DATA = {
  "lastUpdate": 1663025733591,
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
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e471703ff661f2e998437ce60ec3bd9cc0c4cbbb",
          "message": "Regular performance check (#1167)\n\nCo-authored-by: Dmitry Novikov <novikov.dm.al@gmail.com>\r\nCo-authored-by: kvs96 <kvs96@icloud.com>",
          "timestamp": "2022-09-06T18:02:53Z",
          "url": "https://github.com/gear-tech/gear/commit/e471703ff661f2e998437ce60ec3bd9cc0c4cbbb"
        },
        "date": 1662507016002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 14941,
            "unit": "ms",
            "range": "± 15422"
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
            "range": "± 0"
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
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 13,
            "unit": "ms",
            "range": "± 0"
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
            "value": 30,
            "unit": "ms",
            "range": "± 2"
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
            "value": 244,
            "unit": "ms",
            "range": "± 13"
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
            "range": "± 2"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 30,
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 14,
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
            "value": 21,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 13,
            "unit": "ms",
            "range": "± 0"
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
            "value": 13,
            "unit": "ms",
            "range": "± 1"
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
            "value": 11,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 59,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 174,
            "unit": "ms",
            "range": "± 5"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
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
            "range": "± 1"
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
            "range": "± 1"
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
            "value": 26,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
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
            "value": 39,
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 59,
            "unit": "ms",
            "range": "± 1"
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
            "value": 15,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
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
            "range": "± 1"
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
            "value": 8,
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
            "name": "Georgy Shepelev",
            "username": "gshep",
            "email": "gshep@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bc3daf67ba01e5c36d23758fe8c427ba02eb7b07",
          "message": "Remove notifications with performance results (#1446)",
          "timestamp": "2022-09-07T09:25:34Z",
          "url": "https://github.com/gear-tech/gear/commit/bc3daf67ba01e5c36d23758fe8c427ba02eb7b07"
        },
        "date": 1662593507838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 14976,
            "unit": "ms",
            "range": "± 15488"
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::block_gas_limit_works",
            "value": 20,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::calculate_gas_info_for_wait_dispatch_works",
            "value": 28,
            "unit": "ms",
            "range": "± 4"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 70,
            "unit": "ms",
            "range": "± 5"
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
            "range": "± 3"
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
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 15,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 246,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 19,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::exit_locking_funds",
            "value": 22,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::free_storage_hold_on_scheduler_overwhelm",
            "value": 23,
            "unit": "ms",
            "range": "± 4"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 42,
            "unit": "ms",
            "range": "± 4"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 31,
            "unit": "ms",
            "range": "± 4"
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
            "value": 31,
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
            "value": 14,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::missing_functions_are_not_executed",
            "value": 12,
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 31,
            "unit": "ms",
            "range": "± 4"
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
            "range": "± 1"
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
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 60,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 177,
            "unit": "ms",
            "range": "± 10"
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
            "range": "± 0"
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 45,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 65,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 47,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 19,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 26,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 21,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 30,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_fail",
            "value": 53,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_success",
            "value": 39,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 28,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 13,
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
            "value": 18,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 26,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 22,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 21,
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
            "range": "± 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b34eaf3b686816f84563010e54b1405fa0be2ec",
          "message": "Bump arbitrary from 1.1.4 to 1.1.5 (#1460)",
          "timestamp": "2022-09-08T21:06:13Z",
          "url": "https://github.com/gear-tech/gear/commit/3b34eaf3b686816f84563010e54b1405fa0be2ec"
        },
        "date": 1662679919928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 15388,
            "unit": "ms",
            "range": "± 15597"
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
            "range": "± 2"
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
            "range": "± 0"
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
            "range": "± 0"
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
            "value": 30,
            "unit": "ms",
            "range": "± 2"
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
            "value": 242,
            "unit": "ms",
            "range": "± 14"
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
            "range": "± 2"
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
            "value": 30,
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
            "value": 14,
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
            "value": 14,
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
            "range": "± 2"
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
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 31,
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
            "range": "± 2"
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
            "value": 13,
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
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 60,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 177,
            "unit": "ms",
            "range": "± 5"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
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
            "range": "± 0"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 65,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 47,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_fail",
            "value": 53,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "range": "± 1"
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
            "range": "± 1"
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
            "value": 6,
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
            "value": 18,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf334b0ddf3ce2ed03b16333603a99eefaf63e59",
          "message": "Implement lazy pages comparison optimization for macOS (#1419)",
          "timestamp": "2022-09-09T09:39:58Z",
          "url": "https://github.com/gear-tech/gear/commit/bf334b0ddf3ce2ed03b16333603a99eefaf63e59"
        },
        "date": 1662766239482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 15225,
            "unit": "ms",
            "range": "± 15490"
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
            "range": "± 0"
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
            "range": "± 1"
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
            "value": 70,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 13,
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
            "value": 244,
            "unit": "ms",
            "range": "± 12"
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
            "range": "± 1"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 30,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::initial_pages_cheaper_than_allocated_pages",
            "value": 109,
            "unit": "ms",
            "range": "± 4"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 14,
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
            "value": 21,
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
            "value": 31,
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 14,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 21,
            "unit": "ms",
            "range": "± 2"
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
            "value": 21,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 9,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 31,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "value": 60,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 177,
            "unit": "ms",
            "range": "± 7"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 35,
            "unit": "ms",
            "range": "± 1"
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
            "value": 65,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 47,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 20,
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
            "range": "± 1"
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_mad_big_prog_instrumentation",
            "value": 39,
            "unit": "ms",
            "range": "± 1"
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 28,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_zero_gas",
            "value": 20,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 15,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 12,
            "unit": "ms",
            "range": "± 1"
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
            "value": 13,
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
            "value": 6,
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
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662852599046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 15187,
            "unit": "ms",
            "range": "± 15496"
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
            "range": "± 0"
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
            "value": 70,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 13,
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
            "value": 245,
            "unit": "ms",
            "range": "± 14"
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
            "range": "± 1"
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
            "value": 21,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 25,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_sending_instant_transfer",
            "value": 21,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 31,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 14,
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
            "value": 21,
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 21,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 13,
            "unit": "ms",
            "range": "± 1"
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
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 60,
            "unit": "ms",
            "range": "± 4"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 177,
            "unit": "ms",
            "range": "± 6"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 35,
            "unit": "ms",
            "range": "± 1"
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
            "value": 65,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 48,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 20,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 26,
            "unit": "ms",
            "range": "± 1"
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
            "value": 39,
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
            "range": "± 2"
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
            "range": "± 4"
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
            "range": "± 1"
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
            "value": 57,
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
            "range": "± 1"
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
            "range": "± 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662939067799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 15206,
            "unit": "ms",
            "range": "± 15396"
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
            "range": "± 2"
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
            "value": 70,
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
            "value": 30,
            "unit": "ms",
            "range": "± 2"
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
            "value": 245,
            "unit": "ms",
            "range": "± 13"
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
            "range": "± 1"
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
            "range": "± 4"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 14,
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
            "value": 21,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::mailbox_rent_out_of_rent",
            "value": 25,
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
            "value": 31,
            "unit": "ms",
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 12,
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
            "range": "± 0"
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
            "value": 11,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::terminated_locking_funds",
            "value": 60,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 178,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
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
            "value": 65,
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
            "range": "± 1"
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
            "value": 39,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "value": 13,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ff6375cf70e20cd77350d88618116b401ea13d0",
          "message": "Bump quick-xml from 0.24.0 to 0.25.0 (#1470)",
          "timestamp": "2022-09-12T19:02:33Z",
          "url": "https://github.com/gear-tech/gear/commit/7ff6375cf70e20cd77350d88618116b401ea13d0"
        },
        "date": 1663025707171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 15225,
            "unit": "ms",
            "range": "± 15687"
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
            "range": "± 0"
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
            "range": "± 1"
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 70,
            "unit": "ms",
            "range": "± 3"
          },
          {
            "name": "pallet-gear - tests::check_gear_stack_end_fail",
            "value": 13,
            "unit": "ms",
            "range": "± 0"
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
            "value": 24,
            "unit": "ms",
            "range": "± 1"
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
            "range": "± 16"
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
            "range": "± 1"
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
            "range": "± 4"
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
            "value": 25,
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
            "range": "± 1"
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
            "value": 12,
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 21,
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
            "value": 60,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 179,
            "unit": "ms",
            "range": "± 6"
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
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 35,
            "unit": "ms",
            "range": "± 1"
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
            "value": 65,
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
            "range": "± 1"
          },
          {
            "name": "pallet-gear - tests::test_create_program_works",
            "value": 30,
            "unit": "ms",
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_different_waits_fail",
            "value": 53,
            "unit": "ms",
            "range": "± 2"
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
            "range": "± 1"
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 9,
            "unit": "ms",
            "range": "± 0"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 60,
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
            "range": "± 1"
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
            "range": "± 1"
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
            "value": 13,
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
            "value": 7,
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
            "value": 6,
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
            "range": "± 2"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 22,
            "unit": "ms",
            "range": "± 2"
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
        "date": 1662482859661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 27,
            "unit": "ms",
            "range": "± 9"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 36,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 69,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 142,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 83,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Async init - approved pong",
            "value": 15402,
            "unit": "ms",
            "range": "± 213"
          },
          {
            "name": "Async-await - async-await",
            "value": 170,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Async-await - mutex",
            "value": 167,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 156,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 76,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8446,
            "unit": "ms",
            "range": "± 172"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8479,
            "unit": "ms",
            "range": "± 185"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8443,
            "unit": "ms",
            "range": "± 183"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8389,
            "unit": "ms",
            "range": "± 171"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8275,
            "unit": "ms",
            "range": "± 206"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8398,
            "unit": "ms",
            "range": "± 204"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8512,
            "unit": "ms",
            "range": "± 167"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8439,
            "unit": "ms",
            "range": "± 189"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8355,
            "unit": "ms",
            "range": "± 209"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4535,
            "unit": "ms",
            "range": "± 191"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4582,
            "unit": "ms",
            "range": "± 199"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4493,
            "unit": "ms",
            "range": "± 185"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4616,
            "unit": "ms",
            "range": "± 176"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 445,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 62,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Chat - chat",
            "value": 105,
            "unit": "ms",
            "range": "± 27"
          },
          {
            "name": "Decoder - decoder",
            "value": 32,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Exit code - normal",
            "value": 51,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Exit code - panic",
            "value": 30,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 192,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Futures-unordered - join",
            "value": 148,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Futures-unordered - select",
            "value": 159,
            "unit": "ms",
            "range": "± 38"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 146,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 55,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 46,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14490,
            "unit": "ms",
            "range": "± 200"
          },
          {
            "name": "Multiping - multiping",
            "value": 38,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 25,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 28,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Program generator - program_generator",
            "value": 40,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Program_id test - program_id",
            "value": 27,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 34,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 24,
            "unit": "ms",
            "range": "± 10"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 45,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 45,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Total time",
            "value": 145501,
            "unit": "ms",
            "range": "± 1177"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 15,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 142,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Wait test - wait",
            "value": 31,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 64,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 60,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8198,
            "unit": "ms",
            "range": "± 209"
          },
          {
            "name": "gui test - gui",
            "value": 10409,
            "unit": "ms",
            "range": "± 181"
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e471703ff661f2e998437ce60ec3bd9cc0c4cbbb",
          "message": "Regular performance check (#1167)\n\nCo-authored-by: Dmitry Novikov <novikov.dm.al@gmail.com>\r\nCo-authored-by: kvs96 <kvs96@icloud.com>",
          "timestamp": "2022-09-06T18:02:53Z",
          "url": "https://github.com/gear-tech/gear/commit/e471703ff661f2e998437ce60ec3bd9cc0c4cbbb"
        },
        "date": 1662507022505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 30,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 40,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 69,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 148,
            "unit": "ms",
            "range": "± 27"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 83,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async init - approved pong",
            "value": 15349,
            "unit": "ms",
            "range": "± 170"
          },
          {
            "name": "Async-await - async-await",
            "value": 171,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Async-await - mutex",
            "value": 168,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 157,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 81,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8421,
            "unit": "ms",
            "range": "± 160"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8428,
            "unit": "ms",
            "range": "± 156"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8454,
            "unit": "ms",
            "range": "± 168"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8345,
            "unit": "ms",
            "range": "± 175"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8274,
            "unit": "ms",
            "range": "± 193"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8394,
            "unit": "ms",
            "range": "± 185"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8468,
            "unit": "ms",
            "range": "± 170"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8428,
            "unit": "ms",
            "range": "± 180"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8352,
            "unit": "ms",
            "range": "± 172"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4503,
            "unit": "ms",
            "range": "± 181"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4559,
            "unit": "ms",
            "range": "± 197"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4485,
            "unit": "ms",
            "range": "± 195"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4610,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 441,
            "unit": "ms",
            "range": "± 36"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 63,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Chat - chat",
            "value": 102,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Decoder - decoder",
            "value": 31,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Exit code - normal",
            "value": 52,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Exit code - panic",
            "value": 31,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 187,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Futures-unordered - join",
            "value": 147,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Futures-unordered - select",
            "value": 150,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 148,
            "unit": "ms",
            "range": "± 31"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 50,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 45,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14481,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Multiping - multiping",
            "value": 39,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 27,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 31,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Program generator - program_generator",
            "value": 39,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Program_id test - program_id",
            "value": 29,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 33,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 25,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 45,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 42,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Total time",
            "value": 145149,
            "unit": "ms",
            "range": "± 861"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 15,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 142,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Wait test - wait",
            "value": 34,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 66,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 57,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8147,
            "unit": "ms",
            "range": "± 177"
          },
          {
            "name": "gui test - gui",
            "value": 10405,
            "unit": "ms",
            "range": "± 171"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Georgy Shepelev",
            "username": "gshep",
            "email": "gshep@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bc3daf67ba01e5c36d23758fe8c427ba02eb7b07",
          "message": "Remove notifications with performance results (#1446)",
          "timestamp": "2022-09-07T09:25:34Z",
          "url": "https://github.com/gear-tech/gear/commit/bc3daf67ba01e5c36d23758fe8c427ba02eb7b07"
        },
        "date": 1662593514316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 29,
            "unit": "ms",
            "range": "± 12"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 41,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 72,
            "unit": "ms",
            "range": "± 27"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 149,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 85,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Async init - approved pong",
            "value": 15422,
            "unit": "ms",
            "range": "± 199"
          },
          {
            "name": "Async-await - async-await",
            "value": 174,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Async-await - mutex",
            "value": 168,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 160,
            "unit": "ms",
            "range": "± 27"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 75,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8412,
            "unit": "ms",
            "range": "± 164"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8441,
            "unit": "ms",
            "range": "± 153"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8408,
            "unit": "ms",
            "range": "± 175"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8378,
            "unit": "ms",
            "range": "± 166"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8280,
            "unit": "ms",
            "range": "± 195"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8376,
            "unit": "ms",
            "range": "± 200"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8500,
            "unit": "ms",
            "range": "± 165"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8399,
            "unit": "ms",
            "range": "± 166"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8383,
            "unit": "ms",
            "range": "± 186"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4501,
            "unit": "ms",
            "range": "± 178"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4578,
            "unit": "ms",
            "range": "± 172"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4481,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4606,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 449,
            "unit": "ms",
            "range": "± 36"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 61,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Chat - chat",
            "value": 99,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Decoder - decoder",
            "value": 31,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Exit code - normal",
            "value": 48,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Exit code - panic",
            "value": 31,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 196,
            "unit": "ms",
            "range": "± 41"
          },
          {
            "name": "Futures-unordered - join",
            "value": 147,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Futures-unordered - select",
            "value": 159,
            "unit": "ms",
            "range": "± 39"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 152,
            "unit": "ms",
            "range": "± 29"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 57,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 45,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14454,
            "unit": "ms",
            "range": "± 197"
          },
          {
            "name": "Multiping - multiping",
            "value": 38,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 25,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 31,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Program generator - program_generator",
            "value": 41,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Program_id test - program_id",
            "value": 30,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 35,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 25,
            "unit": "ms",
            "range": "± 12"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 43,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 44,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Total time",
            "value": 145328,
            "unit": "ms",
            "range": "± 919"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 19,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 152,
            "unit": "ms",
            "range": "± 34"
          },
          {
            "name": "Wait test - wait",
            "value": 37,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 71,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 60,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8204,
            "unit": "ms",
            "range": "± 197"
          },
          {
            "name": "gui test - gui",
            "value": 10403,
            "unit": "ms",
            "range": "± 179"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b34eaf3b686816f84563010e54b1405fa0be2ec",
          "message": "Bump arbitrary from 1.1.4 to 1.1.5 (#1460)",
          "timestamp": "2022-09-08T21:06:13Z",
          "url": "https://github.com/gear-tech/gear/commit/3b34eaf3b686816f84563010e54b1405fa0be2ec"
        },
        "date": 1662679926482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 27,
            "unit": "ms",
            "range": "± 9"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 39,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 70,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 146,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 84,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Async init - approved pong",
            "value": 15415,
            "unit": "ms",
            "range": "± 210"
          },
          {
            "name": "Async-await - async-await",
            "value": 174,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Async-await - mutex",
            "value": 168,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 164,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 79,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8440,
            "unit": "ms",
            "range": "± 199"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8484,
            "unit": "ms",
            "range": "± 199"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8456,
            "unit": "ms",
            "range": "± 189"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8367,
            "unit": "ms",
            "range": "± 194"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8292,
            "unit": "ms",
            "range": "± 208"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8384,
            "unit": "ms",
            "range": "± 167"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8518,
            "unit": "ms",
            "range": "± 197"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8435,
            "unit": "ms",
            "range": "± 196"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8399,
            "unit": "ms",
            "range": "± 199"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4509,
            "unit": "ms",
            "range": "± 190"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4614,
            "unit": "ms",
            "range": "± 200"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4471,
            "unit": "ms",
            "range": "± 187"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4639,
            "unit": "ms",
            "range": "± 169"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 446,
            "unit": "ms",
            "range": "± 40"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 60,
            "unit": "ms",
            "range": "± 27"
          },
          {
            "name": "Chat - chat",
            "value": 104,
            "unit": "ms",
            "range": "± 31"
          },
          {
            "name": "Decoder - decoder",
            "value": 33,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Exit code - normal",
            "value": 54,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Exit code - panic",
            "value": 33,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 202,
            "unit": "ms",
            "range": "± 43"
          },
          {
            "name": "Futures-unordered - join",
            "value": 157,
            "unit": "ms",
            "range": "± 40"
          },
          {
            "name": "Futures-unordered - select",
            "value": 163,
            "unit": "ms",
            "range": "± 42"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 149,
            "unit": "ms",
            "range": "± 37"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 54,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 47,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14461,
            "unit": "ms",
            "range": "± 186"
          },
          {
            "name": "Multiping - multiping",
            "value": 41,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 28,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 32,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Program generator - program_generator",
            "value": 42,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Program_id test - program_id",
            "value": 30,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 32,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 25,
            "unit": "ms",
            "range": "± 12"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 44,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 44,
            "unit": "ms",
            "range": "± 27"
          },
          {
            "name": "Total time",
            "value": 145569,
            "unit": "ms",
            "range": "± 1546"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 12,
            "unit": "ms",
            "range": "± 11"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 142,
            "unit": "ms",
            "range": "± 37"
          },
          {
            "name": "Wait test - wait",
            "value": 32,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 64,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 58,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8161,
            "unit": "ms",
            "range": "± 212"
          },
          {
            "name": "gui test - gui",
            "value": 10419,
            "unit": "ms",
            "range": "± 189"
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf334b0ddf3ce2ed03b16333603a99eefaf63e59",
          "message": "Implement lazy pages comparison optimization for macOS (#1419)",
          "timestamp": "2022-09-09T09:39:58Z",
          "url": "https://github.com/gear-tech/gear/commit/bf334b0ddf3ce2ed03b16333603a99eefaf63e59"
        },
        "date": 1662766245894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 26,
            "unit": "ms",
            "range": "± 8"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 40,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 72,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 145,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 87,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async init - approved pong",
            "value": 15388,
            "unit": "ms",
            "range": "± 189"
          },
          {
            "name": "Async-await - async-await",
            "value": 168,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Async-await - mutex",
            "value": 162,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 157,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 77,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8440,
            "unit": "ms",
            "range": "± 155"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8471,
            "unit": "ms",
            "range": "± 154"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8434,
            "unit": "ms",
            "range": "± 167"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8368,
            "unit": "ms",
            "range": "± 183"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8261,
            "unit": "ms",
            "range": "± 180"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8395,
            "unit": "ms",
            "range": "± 182"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8461,
            "unit": "ms",
            "range": "± 186"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8437,
            "unit": "ms",
            "range": "± 220"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8371,
            "unit": "ms",
            "range": "± 189"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4505,
            "unit": "ms",
            "range": "± 203"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4584,
            "unit": "ms",
            "range": "± 152"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4507,
            "unit": "ms",
            "range": "± 185"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4607,
            "unit": "ms",
            "range": "± 190"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 447,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 61,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Chat - chat",
            "value": 103,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Decoder - decoder",
            "value": 33,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Exit code - normal",
            "value": 54,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Exit code - panic",
            "value": 36,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 193,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Futures-unordered - join",
            "value": 147,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Futures-unordered - select",
            "value": 152,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 148,
            "unit": "ms",
            "range": "± 30"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 57,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 50,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14518,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Multiping - multiping",
            "value": 41,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 26,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 31,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Program generator - program_generator",
            "value": 41,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Program_id test - program_id",
            "value": 27,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 36,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 25,
            "unit": "ms",
            "range": "± 12"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 45,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 45,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Total time",
            "value": 145439,
            "unit": "ms",
            "range": "± 854"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 15,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 147,
            "unit": "ms",
            "range": "± 34"
          },
          {
            "name": "Wait test - wait",
            "value": 34,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 67,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 61,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8216,
            "unit": "ms",
            "range": "± 190"
          },
          {
            "name": "gui test - gui",
            "value": 10393,
            "unit": "ms",
            "range": "± 174"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662852605650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 28,
            "unit": "ms",
            "range": "± 10"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 40,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 71,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 145,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 88,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async init - approved pong",
            "value": 15394,
            "unit": "ms",
            "range": "± 190"
          },
          {
            "name": "Async-await - async-await",
            "value": 171,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Async-await - mutex",
            "value": 167,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 156,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 77,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8466,
            "unit": "ms",
            "range": "± 169"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8464,
            "unit": "ms",
            "range": "± 168"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8416,
            "unit": "ms",
            "range": "± 145"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8390,
            "unit": "ms",
            "range": "± 181"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8264,
            "unit": "ms",
            "range": "± 205"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8421,
            "unit": "ms",
            "range": "± 182"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8469,
            "unit": "ms",
            "range": "± 153"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8425,
            "unit": "ms",
            "range": "± 168"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8387,
            "unit": "ms",
            "range": "± 168"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4502,
            "unit": "ms",
            "range": "± 163"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4569,
            "unit": "ms",
            "range": "± 187"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4508,
            "unit": "ms",
            "range": "± 170"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4593,
            "unit": "ms",
            "range": "± 187"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 450,
            "unit": "ms",
            "range": "± 36"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 63,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Chat - chat",
            "value": 102,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Decoder - decoder",
            "value": 31,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Exit code - normal",
            "value": 49,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Exit code - panic",
            "value": 32,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 191,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Futures-unordered - join",
            "value": 147,
            "unit": "ms",
            "range": "± 38"
          },
          {
            "name": "Futures-unordered - select",
            "value": 154,
            "unit": "ms",
            "range": "± 38"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 155,
            "unit": "ms",
            "range": "± 28"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 52,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 47,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14504,
            "unit": "ms",
            "range": "± 176"
          },
          {
            "name": "Multiping - multiping",
            "value": 41,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 27,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 29,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "Program generator - program_generator",
            "value": 41,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Program_id test - program_id",
            "value": 30,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 34,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 26,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 42,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 45,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Total time",
            "value": 145420,
            "unit": "ms",
            "range": "± 760"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 16,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 154,
            "unit": "ms",
            "range": "± 38"
          },
          {
            "name": "Wait test - wait",
            "value": 36,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 65,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 60,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8157,
            "unit": "ms",
            "range": "± 200"
          },
          {
            "name": "gui test - gui",
            "value": 10401,
            "unit": "ms",
            "range": "± 166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662939074343,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 27,
            "unit": "ms",
            "range": "± 7"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 40,
            "unit": "ms",
            "range": "± 15"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 72,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 145,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 87,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Async init - approved pong",
            "value": 15442,
            "unit": "ms",
            "range": "± 186"
          },
          {
            "name": "Async-await - async-await",
            "value": 174,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Async-await - mutex",
            "value": 168,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 163,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 80,
            "unit": "ms",
            "range": "± 24"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8431,
            "unit": "ms",
            "range": "± 171"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8452,
            "unit": "ms",
            "range": "± 162"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8388,
            "unit": "ms",
            "range": "± 179"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8348,
            "unit": "ms",
            "range": "± 191"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8295,
            "unit": "ms",
            "range": "± 181"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8398,
            "unit": "ms",
            "range": "± 181"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8488,
            "unit": "ms",
            "range": "± 179"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8374,
            "unit": "ms",
            "range": "± 180"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8390,
            "unit": "ms",
            "range": "± 168"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4516,
            "unit": "ms",
            "range": "± 189"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4586,
            "unit": "ms",
            "range": "± 191"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4465,
            "unit": "ms",
            "range": "± 193"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4583,
            "unit": "ms",
            "range": "± 190"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 452,
            "unit": "ms",
            "range": "± 39"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 61,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Chat - chat",
            "value": 106,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "Decoder - decoder",
            "value": 33,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Exit code - normal",
            "value": 54,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Exit code - panic",
            "value": 34,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 198,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Futures-unordered - join",
            "value": 152,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Futures-unordered - select",
            "value": 158,
            "unit": "ms",
            "range": "± 40"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 153,
            "unit": "ms",
            "range": "± 31"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 55,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 49,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14506,
            "unit": "ms",
            "range": "± 187"
          },
          {
            "name": "Multiping - multiping",
            "value": 44,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 30,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 30,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Program generator - program_generator",
            "value": 40,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Program_id test - program_id",
            "value": 28,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 33,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 27,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 43,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 46,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Total time",
            "value": 145355,
            "unit": "ms",
            "range": "± 965"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 14,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 147,
            "unit": "ms",
            "range": "± 35"
          },
          {
            "name": "Wait test - wait",
            "value": 35,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 69,
            "unit": "ms",
            "range": "± 26"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 60,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8191,
            "unit": "ms",
            "range": "± 183"
          },
          {
            "name": "gui test - gui",
            "value": 10372,
            "unit": "ms",
            "range": "± 156"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ff6375cf70e20cd77350d88618116b401ea13d0",
          "message": "Bump quick-xml from 0.24.0 to 0.25.0 (#1470)",
          "timestamp": "2022-09-12T19:02:33Z",
          "url": "https://github.com/gear-tech/gear/commit/7ff6375cf70e20cd77350d88618116b401ea13d0"
        },
        "date": 1663025713753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 27,
            "unit": "ms",
            "range": "± 9"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 40,
            "unit": "ms",
            "range": "± 14"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 74,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 152,
            "unit": "ms",
            "range": "± 29"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 86,
            "unit": "ms",
            "range": "± 25"
          },
          {
            "name": "Async init - approved pong",
            "value": 15537,
            "unit": "ms",
            "range": "± 205"
          },
          {
            "name": "Async-await - async-await",
            "value": 177,
            "unit": "ms",
            "range": "± 29"
          },
          {
            "name": "Async-await - mutex",
            "value": 171,
            "unit": "ms",
            "range": "± 31"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 164,
            "unit": "ms",
            "range": "± 31"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 80,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & alice",
            "value": 8514,
            "unit": "ms",
            "range": "± 171"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; bob & eve",
            "value": 8513,
            "unit": "ms",
            "range": "± 209"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve & alice",
            "value": 8521,
            "unit": "ms",
            "range": "± 196"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8437,
            "unit": "ms",
            "range": "± 214"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 8310,
            "unit": "ms",
            "range": "± 186"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8473,
            "unit": "ms",
            "range": "± 199"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories & redundant threshold",
            "value": 8574,
            "unit": "ms",
            "range": "± 186"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8463,
            "unit": "ms",
            "range": "± 207"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8437,
            "unit": "ms",
            "range": "± 212"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4560,
            "unit": "ms",
            "range": "± 182"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4627,
            "unit": "ms",
            "range": "± 187"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4540,
            "unit": "ms",
            "range": "± 208"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4654,
            "unit": "ms",
            "range": "± 200"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 448,
            "unit": "ms",
            "range": "± 44"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 64,
            "unit": "ms",
            "range": "± 22"
          },
          {
            "name": "Chat - chat",
            "value": 107,
            "unit": "ms",
            "range": "± 31"
          },
          {
            "name": "Decoder - decoder",
            "value": 38,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Exit code - normal",
            "value": 55,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Exit code - panic",
            "value": 34,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 206,
            "unit": "ms",
            "range": "± 43"
          },
          {
            "name": "Futures-unordered - join",
            "value": 151,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Futures-unordered - select",
            "value": 159,
            "unit": "ms",
            "range": "± 44"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 154,
            "unit": "ms",
            "range": "± 32"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 58,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 48,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14583,
            "unit": "ms",
            "range": "± 188"
          },
          {
            "name": "Multiping - multiping",
            "value": 41,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 27,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 30,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "Program generator - program_generator",
            "value": 43,
            "unit": "ms",
            "range": "± 18"
          },
          {
            "name": "Program_id test - program_id",
            "value": 28,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 36,
            "unit": "ms",
            "range": "± 21"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 26,
            "unit": "ms",
            "range": "± 11"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 46,
            "unit": "ms",
            "range": "± 17"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 48,
            "unit": "ms",
            "range": "± 20"
          },
          {
            "name": "Total time",
            "value": 146658,
            "unit": "ms",
            "range": "± 1509"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 16,
            "unit": "ms",
            "range": "± 13"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 158,
            "unit": "ms",
            "range": "± 33"
          },
          {
            "name": "Wait test - wait",
            "value": 37,
            "unit": "ms",
            "range": "± 19"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 65,
            "unit": "ms",
            "range": "± 23"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 60,
            "unit": "ms",
            "range": "± 16"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 8262,
            "unit": "ms",
            "range": "± 179"
          },
          {
            "name": "gui test - gui",
            "value": 10475,
            "unit": "ms",
            "range": "± 170"
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
        "date": 1662482865836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 441804,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 113371,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 135119,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 140742,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 144231,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 127705,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 155279,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 146998,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 113849,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 142970,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 97782,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 114363,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 176844,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 324833,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 91270,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 184752,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 145648,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 140639,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 143404,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 99371,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 76065,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 19289,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 35333,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 49512,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 69041,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 208710,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 153607,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 119807,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e471703ff661f2e998437ce60ec3bd9cc0c4cbbb",
          "message": "Regular performance check (#1167)\n\nCo-authored-by: Dmitry Novikov <novikov.dm.al@gmail.com>\r\nCo-authored-by: kvs96 <kvs96@icloud.com>",
          "timestamp": "2022-09-06T18:02:53Z",
          "url": "https://github.com/gear-tech/gear/commit/e471703ff661f2e998437ce60ec3bd9cc0c4cbbb"
        },
        "date": 1662507029184,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 357523,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 120385,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 128286,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 130889,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 137325,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 130749,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 158278,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 142713,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 93055,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 138420,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 93256,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 117602,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 153194,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 313730,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 88986,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 180715,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 145054,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 136338,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 132970,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 101205,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 59082,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 44662,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 30571,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 77588,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 94738,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 202829,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 88120,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 109736,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Georgy Shepelev",
            "username": "gshep",
            "email": "gshep@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bc3daf67ba01e5c36d23758fe8c427ba02eb7b07",
          "message": "Remove notifications with performance results (#1446)",
          "timestamp": "2022-09-07T09:25:34Z",
          "url": "https://github.com/gear-tech/gear/commit/bc3daf67ba01e5c36d23758fe8c427ba02eb7b07"
        },
        "date": 1662593520726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 377473,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 113690,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 128990,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 135351,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 137413,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 157739,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 147718,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 146947,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 98932,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 139537,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 93923,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 136443,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 169078,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 301165,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 87308,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 174543,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 151243,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 148288,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 140620,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 95896,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 66075,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 37322,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 34330,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 63993,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 67331,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 206082,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 78825,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 117544,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b34eaf3b686816f84563010e54b1405fa0be2ec",
          "message": "Bump arbitrary from 1.1.4 to 1.1.5 (#1460)",
          "timestamp": "2022-09-08T21:06:13Z",
          "url": "https://github.com/gear-tech/gear/commit/3b34eaf3b686816f84563010e54b1405fa0be2ec"
        },
        "date": 1662679932844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 353185,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 111502,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 130907,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 141374,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 133372,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 132013,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 156791,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 149083,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 92575,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 143072,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 101077,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 110813,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 157478,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 327297,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 86143,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 170261,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 148614,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 135911,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 151290,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 94226,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 43238,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 22857,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 27552,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 66131,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 69593,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 206641,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 129916,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 111894,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf334b0ddf3ce2ed03b16333603a99eefaf63e59",
          "message": "Implement lazy pages comparison optimization for macOS (#1419)",
          "timestamp": "2022-09-09T09:39:58Z",
          "url": "https://github.com/gear-tech/gear/commit/bf334b0ddf3ce2ed03b16333603a99eefaf63e59"
        },
        "date": 1662766252167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 368675,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 111300,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 132500,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 140473,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 130548,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 132051,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 154680,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 145991,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 97915,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 134784,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 98813,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 111709,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 156955,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 336490,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 88701,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 175033,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 154274,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 138917,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 147966,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 100151,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 50440,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 12730,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 31490,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 65357,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 59249,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 213925,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 129637,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 109064,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662852611759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 378686,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 117150,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 131172,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 144551,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 142923,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 143969,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 139483,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 158521,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 91065,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 141987,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 93524,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 121349,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 158267,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 318444,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 88380,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 168526,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 162199,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 129263,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 150647,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 93446,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 54002,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 30737,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 24337,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 74685,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 63938,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 207375,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 89727,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 123097,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662939080661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 372666,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 116847,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 132165,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 127309,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 125890,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 136881,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 146766,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 143319,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 92771,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 131814,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 89561,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 116854,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 150974,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 337054,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 86200,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 173368,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 150965,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 132216,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 149862,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 86287,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 48602,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 34698,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 34802,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 74237,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 60639,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 214078,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 111877,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 102338,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ff6375cf70e20cd77350d88618116b401ea13d0",
          "message": "Bump quick-xml from 0.24.0 to 0.25.0 (#1470)",
          "timestamp": "2022-09-12T19:02:33Z",
          "url": "https://github.com/gear-tech/gear/commit/7ff6375cf70e20cd77350d88618116b401ea13d0"
        },
        "date": 1663025720124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "alloc",
            "value": 371842,
            "unit": "ns"
          },
          {
            "name": "gr_gas_available",
            "value": 112244,
            "unit": "ns"
          },
          {
            "name": "gr_msg_id",
            "value": 133400,
            "unit": "ns"
          },
          {
            "name": "gr_origin",
            "value": 145116,
            "unit": "ns"
          },
          {
            "name": "gr_program_id",
            "value": 138430,
            "unit": "ns"
          },
          {
            "name": "gr_source",
            "value": 134835,
            "unit": "ns"
          },
          {
            "name": "gr_value",
            "value": 150451,
            "unit": "ns"
          },
          {
            "name": "gr_value_available",
            "value": 150892,
            "unit": "ns"
          },
          {
            "name": "gr_size",
            "value": 95246,
            "unit": "ns"
          },
          {
            "name": "gr_read",
            "value": 139380,
            "unit": "ns"
          },
          {
            "name": "gr_block_height",
            "value": 96433,
            "unit": "ns"
          },
          {
            "name": "gr_block_timestamp",
            "value": 122054,
            "unit": "ns"
          },
          {
            "name": "gr_send_init",
            "value": 168485,
            "unit": "ns"
          },
          {
            "name": "gr_send_push",
            "value": 325553,
            "unit": "ns"
          },
          {
            "name": "gr_send_commit",
            "value": 86923,
            "unit": "ns"
          },
          {
            "name": "gr_reply_commit",
            "value": 156286,
            "unit": "ns"
          },
          {
            "name": "gr_reply_push",
            "value": 162765,
            "unit": "ns"
          },
          {
            "name": "gr_reply_to",
            "value": 136572,
            "unit": "ns"
          },
          {
            "name": "gr_debug",
            "value": 135457,
            "unit": "ns"
          },
          {
            "name": "gr_exit_code",
            "value": 98681,
            "unit": "ns"
          },
          {
            "name": "gr_exit",
            "value": 71627,
            "unit": "ns"
          },
          {
            "name": "gr_leave",
            "value": 32617,
            "unit": "ns"
          },
          {
            "name": "gr_wait",
            "value": 39539,
            "unit": "ns"
          },
          {
            "name": "gr_wait_for",
            "value": 75681,
            "unit": "ns"
          },
          {
            "name": "gr_wait_no_more",
            "value": 71933,
            "unit": "ns"
          },
          {
            "name": "gr_wake",
            "value": 209076,
            "unit": "ns"
          },
          {
            "name": "gr_create_program_wgas",
            "value": 141953,
            "unit": "ns"
          },
          {
            "name": "gas",
            "value": 121911,
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
        "date": 1662482871985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 7,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 422,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 549,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 713,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 381,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 543,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1740,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 17,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 638,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1804,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 153,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 42,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 113,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 127,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 103,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 203,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 1893,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 649,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 699,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 113,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 234,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 82,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 34,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 35,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 271,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 269,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 266,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 258,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 265,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 280,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 226,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 272,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 252,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 246,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 200,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 184,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 239,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 1002,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 914,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 2171,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 938,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 204,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 200,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 182,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 179,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 131,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 158,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 148,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e471703ff661f2e998437ce60ec3bd9cc0c4cbbb",
          "message": "Regular performance check (#1167)\n\nCo-authored-by: Dmitry Novikov <novikov.dm.al@gmail.com>\r\nCo-authored-by: kvs96 <kvs96@icloud.com>",
          "timestamp": "2022-09-06T18:02:53Z",
          "url": "https://github.com/gear-tech/gear/commit/e471703ff661f2e998437ce60ec3bd9cc0c4cbbb"
        },
        "date": 1662507035520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 1,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 560,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 682,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 635,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 423,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 557,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1702,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 19,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 616,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1963,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 127,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 66,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 173,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 156,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 156,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 207,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 2392,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 622,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 635,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 117,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 223,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 73,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 53,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 49,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 227,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 243,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 220,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 233,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 245,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 229,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 231,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 242,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 230,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 239,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 175,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 179,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 963,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 985,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1987,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 906,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 136,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 154,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 199,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 158,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 180,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 185,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 123,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 198,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Georgy Shepelev",
            "username": "gshep",
            "email": "gshep@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bc3daf67ba01e5c36d23758fe8c427ba02eb7b07",
          "message": "Remove notifications with performance results (#1446)",
          "timestamp": "2022-09-07T09:25:34Z",
          "url": "https://github.com/gear-tech/gear/commit/bc3daf67ba01e5c36d23758fe8c427ba02eb7b07"
        },
        "date": 1662593527115,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 399,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 835,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 637,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 409,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 563,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1716,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 17,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 968,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1724,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 131,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 81,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 91,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 134,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 242,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 1902,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 626,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 637,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 103,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 69,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 58,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 57,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 256,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 196,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 266,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 273,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 263,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 226,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 215,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 228,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 261,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 196,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 174,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 227,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 999,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 938,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1941,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 889,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 211,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 139,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 208,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 186,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 130,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 155,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 130,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 194,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b34eaf3b686816f84563010e54b1405fa0be2ec",
          "message": "Bump arbitrary from 1.1.4 to 1.1.5 (#1460)",
          "timestamp": "2022-09-08T21:06:13Z",
          "url": "https://github.com/gear-tech/gear/commit/3b34eaf3b686816f84563010e54b1405fa0be2ec"
        },
        "date": 1662679939169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 393,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 662,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 702,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 419,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 564,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1725,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 18,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 545,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 2026,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 154,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 63,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 134,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 141,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 109,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 201,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 1960,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 658,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 621,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 132,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 278,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 76,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 50,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 50,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 203,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 231,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 251,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 245,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 242,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 273,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 251,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 250,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 193,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 210,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 248,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 960,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 966,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1908,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 909,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 142,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 179,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 205,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 130,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 141,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 201,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 169,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 123,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf334b0ddf3ce2ed03b16333603a99eefaf63e59",
          "message": "Implement lazy pages comparison optimization for macOS (#1419)",
          "timestamp": "2022-09-09T09:39:58Z",
          "url": "https://github.com/gear-tech/gear/commit/bf334b0ddf3ce2ed03b16333603a99eefaf63e59"
        },
        "date": 1662766258342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 12,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 432,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 526,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 707,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 427,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 567,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1754,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 16,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 963,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1940,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 171,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 67,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 144,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 124,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 128,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 258,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 1974,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 638,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 658,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 132,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 292,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 35,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 72,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 48,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 230,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 252,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 261,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 262,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 233,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 237,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 249,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 209,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 230,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 204,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 216,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 225,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 978,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 1000,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1798,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 907,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 153,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 174,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 195,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 138,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 122,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 177,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 174,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 184,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662852618105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 394,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 0,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 658,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 439,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 532,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1737,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 18,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 954,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1825,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 165,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 50,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 119,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 135,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 74,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 262,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 1956,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 596,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 645,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 91,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 233,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 87,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 55,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 58,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 244,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 183,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 248,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 248,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 286,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 243,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 197,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 235,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 220,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 178,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 168,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 236,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 968,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 926,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1937,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 905,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 177,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 188,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 176,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 161,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 166,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 161,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 156,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662939086772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 15,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 344,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 810,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 671,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 431,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 586,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1742,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 13,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 524,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 2150,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 162,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 64,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 166,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 119,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 86,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 228,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 2059,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 557,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 644,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 143,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 238,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 76,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 60,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 16,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 244,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 247,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 247,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 265,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 269,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 265,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 260,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 278,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 165,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 189,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 136,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 196,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 1011,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 835,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 1942,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 929,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 179,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 173,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 162,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 146,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 115,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 164,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 211,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 187,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ff6375cf70e20cd77350d88618116b401ea13d0",
          "message": "Bump quick-xml from 0.24.0 to 0.25.0 (#1470)",
          "timestamp": "2022-09-12T19:02:33Z",
          "url": "https://github.com/gear-tech/gear/commit/7ff6375cf70e20cd77350d88618116b401ea13d0"
        },
        "date": 1663025726534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "i64const",
            "value": 10,
            "unit": "ns"
          },
          {
            "name": "i64load",
            "value": 283,
            "unit": "ns"
          },
          {
            "name": "i64store",
            "value": 958,
            "unit": "ns"
          },
          {
            "name": "select",
            "value": 675,
            "unit": "ns"
          },
          {
            "name": "br",
            "value": 429,
            "unit": "ns"
          },
          {
            "name": "br_if",
            "value": 612,
            "unit": "ns"
          },
          {
            "name": "br_table",
            "value": 1758,
            "unit": "ns"
          },
          {
            "name": "br_table_per_entry",
            "value": 26,
            "unit": "ns"
          },
          {
            "name": "call",
            "value": 950,
            "unit": "ns"
          },
          {
            "name": "call_indirect",
            "value": 1808,
            "unit": "ns"
          },
          {
            "name": "call_indirect_per_param",
            "value": 186,
            "unit": "ns"
          },
          {
            "name": "local_get",
            "value": 22,
            "unit": "ns"
          },
          {
            "name": "local_set",
            "value": 120,
            "unit": "ns"
          },
          {
            "name": "local_tee",
            "value": 141,
            "unit": "ns"
          },
          {
            "name": "global_get",
            "value": 180,
            "unit": "ns"
          },
          {
            "name": "global_set",
            "value": 174,
            "unit": "ns"
          },
          {
            "name": "memory_current",
            "value": 2783,
            "unit": "ns"
          },
          {
            "name": "i64clz",
            "value": 575,
            "unit": "ns"
          },
          {
            "name": "i64ctz",
            "value": 635,
            "unit": "ns"
          },
          {
            "name": "i64popcnt",
            "value": 96,
            "unit": "ns"
          },
          {
            "name": "i64eqz",
            "value": 243,
            "unit": "ns"
          },
          {
            "name": "i64extendsi32",
            "value": 93,
            "unit": "ns"
          },
          {
            "name": "i64extendui32",
            "value": 44,
            "unit": "ns"
          },
          {
            "name": "i32wrapi64",
            "value": 34,
            "unit": "ns"
          },
          {
            "name": "i64eq",
            "value": 261,
            "unit": "ns"
          },
          {
            "name": "i64ne",
            "value": 260,
            "unit": "ns"
          },
          {
            "name": "i64lts",
            "value": 238,
            "unit": "ns"
          },
          {
            "name": "i64ltu",
            "value": 259,
            "unit": "ns"
          },
          {
            "name": "i64gts",
            "value": 212,
            "unit": "ns"
          },
          {
            "name": "i64gtu",
            "value": 232,
            "unit": "ns"
          },
          {
            "name": "i64les",
            "value": 232,
            "unit": "ns"
          },
          {
            "name": "i64leu",
            "value": 230,
            "unit": "ns"
          },
          {
            "name": "i64ges",
            "value": 285,
            "unit": "ns"
          },
          {
            "name": "i64geu",
            "value": 246,
            "unit": "ns"
          },
          {
            "name": "i64add",
            "value": 184,
            "unit": "ns"
          },
          {
            "name": "i64sub",
            "value": 189,
            "unit": "ns"
          },
          {
            "name": "i64mul",
            "value": 260,
            "unit": "ns"
          },
          {
            "name": "i64divs",
            "value": 1048,
            "unit": "ns"
          },
          {
            "name": "i64divu",
            "value": 970,
            "unit": "ns"
          },
          {
            "name": "i64rems",
            "value": 2015,
            "unit": "ns"
          },
          {
            "name": "i64remu",
            "value": 1030,
            "unit": "ns"
          },
          {
            "name": "i64and",
            "value": 171,
            "unit": "ns"
          },
          {
            "name": "i64or",
            "value": 161,
            "unit": "ns"
          },
          {
            "name": "i64xor",
            "value": 188,
            "unit": "ns"
          },
          {
            "name": "i64shl",
            "value": 159,
            "unit": "ns"
          },
          {
            "name": "i64shrs",
            "value": 180,
            "unit": "ns"
          },
          {
            "name": "i64shru",
            "value": 182,
            "unit": "ns"
          },
          {
            "name": "i64rotl",
            "value": 144,
            "unit": "ns"
          },
          {
            "name": "i64rotr",
            "value": 162,
            "unit": "ns"
          }
        ]
      }
    ],
    "pallet-gear extrinsic weights": [
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
        "date": 1662482878140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 72,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 77,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e471703ff661f2e998437ce60ec3bd9cc0c4cbbb",
          "message": "Regular performance check (#1167)\n\nCo-authored-by: Dmitry Novikov <novikov.dm.al@gmail.com>\r\nCo-authored-by: kvs96 <kvs96@icloud.com>",
          "timestamp": "2022-09-06T18:02:53Z",
          "url": "https://github.com/gear-tech/gear/commit/e471703ff661f2e998437ce60ec3bd9cc0c4cbbb"
        },
        "date": 1662507041870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 72,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 76,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 1,
            "unit": "ns"
          },
          {
            "name": "claim_value",
            "value": 0,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Georgy Shepelev",
            "username": "gshep",
            "email": "gshep@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bc3daf67ba01e5c36d23758fe8c427ba02eb7b07",
          "message": "Remove notifications with performance results (#1446)",
          "timestamp": "2022-09-07T09:25:34Z",
          "url": "https://github.com/gear-tech/gear/commit/bc3daf67ba01e5c36d23758fe8c427ba02eb7b07"
        },
        "date": 1662593533528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 74,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 76,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
            "value": 0,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b34eaf3b686816f84563010e54b1405fa0be2ec",
          "message": "Bump arbitrary from 1.1.4 to 1.1.5 (#1460)",
          "timestamp": "2022-09-08T21:06:13Z",
          "url": "https://github.com/gear-tech/gear/commit/3b34eaf3b686816f84563010e54b1405fa0be2ec"
        },
        "date": 1662679945472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 72,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 75,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bf334b0ddf3ce2ed03b16333603a99eefaf63e59",
          "message": "Implement lazy pages comparison optimization for macOS (#1419)",
          "timestamp": "2022-09-09T09:39:58Z",
          "url": "https://github.com/gear-tech/gear/commit/bf334b0ddf3ce2ed03b16333603a99eefaf63e59"
        },
        "date": 1662766264576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 70,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 76,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
            "value": 0,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662852624614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 71,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 74,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
            "value": 0,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Krinitsyn Vladislav",
            "username": "kvs96",
            "email": "kvs96@icloud.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "035b4183d11673b32ebc8e8041b5ef7e3a40f408",
          "message": "add network selector for logs (#1459)",
          "timestamp": "2022-09-10T11:46:55Z",
          "url": "https://github.com/gear-tech/gear/commit/035b4183d11673b32ebc8e8041b5ef7e3a40f408"
        },
        "date": 1662939093062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 72,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 76,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
            "value": 0,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7ff6375cf70e20cd77350d88618116b401ea13d0",
          "message": "Bump quick-xml from 0.24.0 to 0.25.0 (#1470)",
          "timestamp": "2022-09-12T19:02:33Z",
          "url": "https://github.com/gear-tech/gear/commit/7ff6375cf70e20cd77350d88618116b401ea13d0"
        },
        "date": 1663025732903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "upload_code",
            "value": 72,
            "unit": "ns"
          },
          {
            "name": "upload_program",
            "value": 79,
            "unit": "ns"
          },
          {
            "name": "create_program",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "send_message",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "send_reply",
            "value": 2,
            "unit": "ns"
          },
          {
            "name": "claim_value",
            "value": 0,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}